import { useState, useEffect } from "react"

export default function ListaSupermercado() {
  const [itens, setItens] = useState([])
  const [novoItem, setNovoItem] = useState("")

  
    // Persistir os dados localmente 

    useEffect(() => {
        const itensSalvos = localStorage.getItem("ListaSupermercado")
        if (itensSalvos) {
            setItens(JSON.parse(itensSalvos))
        }

    },[])

   useEffect(() => { 
        if (itens.length > 0){
            // Como listaSupermercado é um array em JS, o JSON.stringify
            // é usado para converter em formato texto (json)
            localStorage.setItem("ListaSupermercado", JSON.stringify(itens))
        }
    }, [itens])


  function adicionarItem() {
    if (!novoItem.trim()) return
    const novo = { nome: novoItem, comprado: false }
    setItens([...itens, novo])
    setNovoItem("")
  }

  function marcarComoComprado(index) {
    const listaAtualizada = itens.map((item, i) =>
      i === index ? { ...item, comprado: true } : item
    )
    setItens(listaAtualizada)
  }

  function ordenarItens() {
    const listaOrdenada = [...itens].sort((a, b) =>
      a.nome.localeCompare(b.nome)
    )
    setItens(listaOrdenada)

    // let x = 8
    // let y = "8"

    // if (x === y) {
    //   console.log("São iguais")
    // } else {
    //   console.log("Não São iguais")
    // }

  }

  function removerListaSupermercado(index) {
        // Cria uma nova lista sem a tarefa que está no índice recebido
        const listaAtualizada = itens.filter((tarefa, i) =>{
            // Mantém todas as tarefas cujo índice é diferente do index
            return i != index
        })

        // Atualiza o estado com a nova lista
        setItens(listaAtualizada)
        
    }

  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <h2 className="text-center mb-4">Lista de Supermercado</h2>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Digite um item (ex: arroz, leite, pão...)"
          value={novoItem}
          onChange={(e) => setNovoItem(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && adicionarItem()}
        />
        <button className="btn btn-success" onClick={adicionarItem}>
          Adicionar
        </button>
        <button className="btn btn-warning btn-sm" onClick={ordenarItens}>
          Ordenar Itens
        </button>
      </div>

      <ul className="list-group">
        {itens.length === 0 && (
          <li className="list-group-item text-center text-muted">
            Nenhum item adicionado
          </li>
        )}
        {itens.map((item, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span
              style={{
                textDecoration: item.comprado ? "line-through" : "none",
                color: item.comprado ? "gray" : "black",
              }}
            >
              {item.nome}
            </span>
            {!item.comprado && (
              <button
                className="btn btn-primary btn-sm"
                onClick={() => marcarComoComprado(index)}
              >
                Marcar como Comprado
              </button>              
            )}
                    <button
                            className="btn btn-danger btn-sm"
                            onClick={() => removerListaSupermercado(index)}
                    >Remover</button>

          </li>
        ))}
      </ul>
    </div>
  )
}
