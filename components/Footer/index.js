import React from 'react'

const Footer = () => {
    return (
        <div className="bg-gray-700 p-4">
            <div className="container mx-auto text-center text-white font-bold">
                Projeto desenvolvido por 
                <a className="hover:underline px-2" href="https://progm.net.br">Marcos Antonio</a> / 
                <a className="hover:underline px-2" href="https://linkedin.com/in/marcaosi">Linkedin</a> / 
                <a className="hover:underline px-2" href="https://github.com/marcaosi">GitHub</a>

                <div className="mt-2">
                    <img className="inline p-4" src="/logo_semana_fsm.png" alt="Semana FS" />
                    <img className="inline p-4" src="/logo_devpleno.png" alt="Semana FS" />
                </div>
                
            </div>
        </div>
    )
}

export default Footer