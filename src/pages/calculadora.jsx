import { useState } from "react";

export default function Calculadora() {
  const [primeiro, setPrimeiro] = useState("");
  const [segundo, setSegundo] = useState("");
  const [resultado, setResultado] = useState(null);

  const somar = () => {
    if (primeiro === "" || segundo === "") return;
    setResultado(Number(primeiro) + Number(segundo));
  };

  const subtrair = () => {
    if (primeiro === "" || segundo === "") return;
    setResultado(Number(primeiro) - Number(segundo));
  };

  const multiplicar = () => {
    if (primeiro === "" || segundo === "") return;
    setResultado(Number(primeiro) * Number(segundo));
  };

  const dividir = () => {
    if (primeiro === "" || segundo === "") return;
    if (Number(segundo) === 0) {
      setResultado("Erro: divisão por zero");
    } else {
      setResultado(Number(primeiro) / Number(segundo));
    }
  };

  const limpar = () => {
    setPrimeiro("");
    setSegundo("");
    setResultado(null);
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h1 className="text-center mb-4">Calculadora</h1>

      <div className="d-flex justify-content-between mb-3">
        <input
          type="number"
          className="form-control me-2"
          placeholder="Primeiro número"
          value={primeiro}
          onChange={(e) => setPrimeiro(e.target.value)}
        />

        <input
          type="number"
          className="form-control"
          placeholder="Segundo número"
          value={segundo}
          onChange={(e) => setSegundo(e.target.value)}
        />
      </div>

      <div className="d-flex flex-wrap justify-content-center gap-2">
        <button
          className="btn"
          style={{
            backgroundColor: "white",
            border: "1px solid #ccc",
            width: "60px",
          }}
          onClick={somar}
        >
          +
        </button>

        <button
          className="btn"
          style={{
            backgroundColor: "white",
            border: "1px solid #ccc",
            width: "60px",
          }}
          onClick={subtrair}
        >
          -
        </button>

        <button
          className="btn"
          style={{
            backgroundColor: "white",
            border: "1px solid #ccc",
            width: "60px",
          }}
          onClick={multiplicar}
        >
          ×
        </button>

        <button
          className="btn"
          style={{
            backgroundColor: "white",
            border: "1px solid #ccc",
            width: "60px",
          }}
          onClick={dividir}
        >
          ÷
        </button>

        <button
          className="btn"
          style={{
            backgroundColor: "white",
            border: "1px solid #ccc",
            width: "80px",
          }}
          onClick={limpar}
        >
          Limpar
        </button>
      </div>

      <div className="mt-4 text-center">
        <h4>Resultado:</h4>
        <div
          className="border p-3 rounded"
          style={{ backgroundColor: "#f8f9fa", minHeight: "50px" }}
        >
          {resultado !== null ? resultado : "---"}
        </div>
      </div>
    </div>
  );
}
