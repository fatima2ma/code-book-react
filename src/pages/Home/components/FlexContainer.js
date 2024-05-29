function FlexContainer({children}){
    return(
        <div className="flex flex-col gap-24">
            {children}
        </div>
    )
}

export default FlexContainer;