function LinnadeMenyy({linnad, linnIndex, valiLinn}) {
    
    return (
        <div className="linnadeMenyy">
            {
                linnad.map((linn, index) => {

                        const reaKlass = (linnIndex === index) ? 'aktiivne': 'normaalne';
                        return(
                            <div 
                                className={reaKlass} 
                                key={index}
                                onClick={() => valiLinn(index)}
                            >

                                {linn.nimi}
                            </div>
                        )
                })
            }
        </div>
    )
}

export default LinnadeMenyy