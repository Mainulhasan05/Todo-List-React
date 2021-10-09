import React from 'react'

export default function footer() {
    let kire={
        position:"relative",
        width:"100%",
        top:"100vh"
    }
    return (
        <footer className="bg-dark text-light py-3" style={kire}>
            <p className="text-center">
            Copyright &copy; MyTodoList.com       
            </p>

        </footer>
    )
}
