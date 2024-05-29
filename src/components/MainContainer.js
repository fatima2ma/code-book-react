function MainContainer({children}){
    return(
        <div className="App dark:bg-dark">
        <div className="container mx-auto px-2 min-h-dvh flex gap-24 flex-col">
            {children}
        </div>
        </div>
    )
}

export default MainContainer;