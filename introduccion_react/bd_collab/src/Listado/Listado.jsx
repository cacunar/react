import Table from 'react-bootstrap/Table';

export const Listado = ({ colaboradores }) => (
  <>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Edad</th>
          <th>Cargo</th>
          <th>Telefono</th>
        </tr>
      </thead>
      <tbody>
        {colaboradores.map((colaborador, index) => (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{colaborador.nombre}</td>
                <td>{colaborador.correo}</td>
                <td>{colaborador.edad}</td>
                <td>{colaborador.cargo}</td>
                <td>{colaborador.telefono}</td>
            </tr>
        ))}
      </tbody>
      </Table>
  </>
);