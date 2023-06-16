function App() {
  return (<>
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="card">
        <div className="card-header">
          Importation de données
        </div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <form>
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">Importez un fichier xml</label>
              <input className="form-control" type="file" id="formFile" />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">Importer</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </>
  );
}

export default App;