import "./checklists-wrapper.style.css";

export default function ChecklistsWrapper({ children, ...rest }) {
  return (
    <section className="wrapper" {...rest}>
      {children}
    </section>
  );
}
