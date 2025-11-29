import { Fragment, use, useState } from "react";
import ChecklistsWrapper from "./components/ChecklistsWrapper";
import Container from "./components/Container";
import Dialog from "./components/Dialog";
import FabButton from "./components/FabButton";
import Header from "./components/Header";
import Heading from "./components/Heading";
import { IconPlus, IconSchool, IconSearch } from "./components/icons";
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
  const [searchInputValue, setSearchInputValue] = useState("");

  const handleSearchInput = () => setShowSearchInput(!showSearchInput);
  const handleSearchInputValue = (event) => {
    setSearchInputValue(event.target.value);
  };

  const handleFormSubmit = (formData) => {
    if (selectedTodo) editTodo(formData);
    else addTodo(formData);

    closeFormTodoDialog();
  };

  const filterCompletedTodos = todos.filter((t) => t.completed);
  const filterPendingTodos = todos.filter((t) => !t.completed);
  const filterSearchedTodos = todos.filter((t) =>
    t.title.toLowerCase().includes(searchInputValue.toLowerCase())
  );

  return (
    <main>
      <Container>
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
              onClick={() => handleSearchInput()}
            >
              <IconSearch />
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

          {!showSearchInput && (
            <Fragment>
              <TodoGroup heading="Para estudar" items={filterPendingTodos} />

              {todos.length === 0 && <EmptyState />}

              <TodoGroup heading="Concluído" items={filterCompletedTodos} />
            </Fragment>
          )}
        </ChecklistsWrapper>
      </Container>
    </main>
  );
}

export default App;
