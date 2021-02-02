import React from 'react'
import Link from 'next/link'

const Pesquisa = () => {
    const save = async () => {
        const form = {
            Nome: "aaa",
            Email: "bbb",
            Whatsapp: "ccc"
        }

        try{
            const response = await fetch('/api/save', {
                method: "POST",
                body: JSON.stringify(form)
            })
    
            const data = await response.json()
    
            console.log(data)
        }catch(err){
            
        }
    }
    return (
        <div className="pt-6">
            <h1 className="text-center font-bold my-4 text-2xl">Críticas e Sugestões</h1>
            <p className="text-center mb-6">
                O restaurante X sempre busca por atender melhor seus clientes.<br /> 
                Por isso, estamos sempre abertos a ouvir a sua opinião.
            </p>
            
            <div className="w-1/5 mx-auto">
                <label className="font-bold">Seu nome:</label>
                <input type="text" className="p-4 block shadow bg-blue-100 my-2 rounded-lg" />
                <button className="bg-blue-400 hover:shadow px-12 py-4 font-bold rounded-lg shadow-lg" onClick={save}>Salvar</button>
            </div>
        </div>
    )
}

export default Pesquisa