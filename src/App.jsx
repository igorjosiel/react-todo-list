import { Fragment, use, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import ChecklistsWrapper from "./components/ChecklistsWrapper";
import Container from "./components/Container";
import Dialog from "./components/Dialog";
import FabButton from "./components/FabButton";
import Header from "./components/Header";
import Heading from "./components/Heading";
import {
  IconHighPriority,
  IconPlus,
  IconSchool,
  IconSearch,
} from "./components/icons";
import TodoForm from "./components/TodoForm";
import TodoContext from "./components/TodoProvider/TodoContext";
import TodoGroup from "./components/TodoGroup";
import EmptyState from "./components/EmptyState";
import TextInput from "./components/TextInput";
import ChecklistsWrapperHeader from "./components/ChecklistsWrapperHeader";

function App() {
  const {
    todos,
    addTodo,
    showDialog,
    openFormTodoDialog,
    closeFormTodoDialog,
    selectedTodo,
    editTodo,
  } = use(TodoContext);

  const [showSearchInput, setShowSearchInput] = useState(false);
  const [showHighPriority, setShowHighPriority] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState("");

  useEffect(() => {
    if (showHighPriority) {
      setShowSearchInput(false);
      setSearchInputValue("");
    }
  }, [showHighPriority]);

  useEffect(() => {
    if (showSearchInput) setShowHighPriority(false);
    else setSearchInputValue("");
  }, [showSearchInput]);

  const handleSearchInput = () => setShowSearchInput(!showSearchInput);
  const handleHighPriority = () => setShowHighPriority(!showHighPriority);

  const handleSearchInputValue = (event) => {
    setSearchInputValue(event.target.value);
  };

  const handleFormSubmit = async (formData) => {
    try {
      if (selectedTodo) {
        await editTodo(formData);

        toast.success("Tarefa editada com sucesso!");
      } else {
        await addTodo(formData);

        toast.success("Tarefa adicionada com sucesso!");
      }
    } catch (error) {
      console.error("Erro ao salvar a tarefa:", error);
      toast.error("Ocorreu um erro ao salvar a tarefa.");
    }

    closeFormTodoDialog();
  };

  const filterCompletedTodos = todos.filter((t) => t.completed);
  const filterPendingTodos = todos.filter((t) => !t.completed);
  const filterSearchedTodos = todos.filter((t) =>
    t.title.toLowerCase().includes(searchInputValue.toLowerCase())
  );
  const filterHighPriorityTodos = todos.filter(
    (t) => t.priority === "high" && !t.completed
  );

  return (
    <main>
      <Container>
        <ToastContainer />

        <Header>
          <Heading>
            <IconSchool /> Plano de estudos
          </Heading>
        </Header>

        <ChecklistsWrapper>
          <ChecklistsWrapperHeader>
            <FabButton
              ariaLabel="Buscar todo"
              title="Buscar todo"
              onClick={handleSearchInput}
              ariaPressed={showSearchInput}
            >
              <IconSearch />
            </FabButton>

            <FabButton
              ariaLabel="Filtrar por prioridade alta"
              title="Filtrar por prioridade alta"
              onClick={handleHighPriority}
              ariaPressed={showHighPriority}
            >
              <IconHighPriority />
            </FabButton>

            <FabButton
              ariaLabel="Adicionar novo todo"
              title="Adicionar novo todo"
              onClick={() => openFormTodoDialog()}
            >
              <IconPlus />
            </FabButton>

            <Dialog isOpen={showDialog} onClose={closeFormTodoDialog}>
              <TodoForm onSubmit={handleFormSubmit} />
            </Dialog>
          </ChecklistsWrapperHeader>

          {showSearchInput && (
            <Fragment>
              <TextInput
                value={searchInputValue}
                onChange={handleSearchInputValue}
                type="search"
                placeholder="Buscar tarefa..."
                autoFocus
                mb="1.5rem"
              />

              <TodoGroup
                heading="Resultados da busca"
                items={filterSearchedTodos}
              />
            </Fragment>
          )}

          {showHighPriority && (
            <Fragment>
              <TodoGroup
                heading="Prioridade alta"
                items={filterHighPriorityTodos}
              />
            </Fragment>
          )}

          {!showSearchInput && !showHighPriority && (
            <Fragment>
              {todos.length === 0 && (
                <EmptyState
                  message={
                    "Ainda não há tarefas cadastradas, adicione para começar!"
                  }
                />
              )}

              {filterPendingTodos.length > 0 && (
                <TodoGroup heading="Para estudar" items={filterPendingTodos} />
              )}
              {filterCompletedTodos.length > 0 && (
                <TodoGroup heading="Concluído" items={filterCompletedTodos} />
              )}
            </Fragment>
          )}
        </ChecklistsWrapper>
      </Container>
    </main>
  );
}

export default App;
