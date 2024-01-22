export const Alert = ({ mensaje, tipo }) => {
  if (!mensaje) return null;

  return (
    <div
      className={`alert ${
        tipo === "success" ? "alert-success" : "alert-danger"
      }`}
      role="alert"
    >
      {mensaje}
    </div>
  );
};
