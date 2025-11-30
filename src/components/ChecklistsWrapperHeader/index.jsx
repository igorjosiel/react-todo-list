import "./checklists-wrapper-header.style.css";

export default function ChecklistsWrapperHeader({ children, ...rest }) {
  return (
    <div className="checklistsWrapperHeader" {...rest}>
      {children}
    </div>
  );
}
