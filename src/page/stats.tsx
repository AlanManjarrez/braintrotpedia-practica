import { useStats } from "../hooks/use-stats";

const Stats = () => {
  const { stats, isLoading, error } = useStats();

  if (isLoading)
    return <h3 className="text-center mt-4">Cargando estadisticas...</h3>;
  if (error)
    return <div className="alert alert-danger text-center">{error}</div>;

  return (
    <div className="container my-4 p-4">
      <h2 className="text-center mb-4 fw-bold">Estadísticas Generales</h2>

      {/* Total personajes */}
      <div className="row g-4 mb-2">
        <div className="col-md-6 col-lg-6">
          <div className="card shadow-sm border-dark">
            <div className="card-body text-center">
              <h5 className="fw-bold">Total de Personajes</h5>
              <h2 className="display-6 fw-bold">{stats?.totalPersonajes}</h2>
            </div>
          </div>
        </div>
        
        {/* Total de memes */}
        <div className="col-md-6 col-lg-6">
          <div className="card shadow-sm border-dark">
            <div className="card-body text-center">
              <h5 className="fw-bold">Total de Memes</h5>
              <h2 className="display-6 fw-bold">{stats?.totalMemes}</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Orígenes */}
      <div className="row g-4 mb-2">
        <div className="col-12">
          <div className="card shadow-sm border-dark">
            <div className="card-body">
              <h5 className="fw-bold mb-2">Orígenes</h5>
              <div className="d-flex flex-wrap gap-2">
                {stats?.origenes.map((origen, i) => (
                  <span key={i} className="badge text-bg-dark p-2 fs-6">
                    {origen}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Niveles de popularidad */}
      <div className="row g-4">
        <div className="col-12">
          <div className="card shadow-sm border-dark">
            <div className="card-body">
              <h5 className="fw-bold mb-2">Niveles de popularidad</h5>
              <div className="d-flex flex-wrap gap-2">
                {stats?.nivelesPopularidad.map((nivel, i) => (
                  <span key={i} className="badge text-bg-dark p-2 fs-6">
                    {nivel}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Stats;
