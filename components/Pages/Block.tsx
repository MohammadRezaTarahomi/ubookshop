

export const Block = props => {


    if(!props.state.cart)
    {
        props.state.cart = []
    }

    let size = props.state.cart.includes(props.book.title)?20:25


    return <c-c style={{
        width: 150,  flex: 1, minWidth: 150,
        position: "relative", backgroundColor:"white",
        borderRadius:10, margin:"10px", boxShadow:" 0px 0px 9px 3px rgba(0,0,0,0.75"
    }}>

        <img
            className={global.styles.hover}
            src={props.book.imageLink}
            style={{
                 width:"100%", 
                 height: 200, 
                 objectFit: "fill", 
                 minWidth: 150, borderTopLeftRadius:5,borderTopRightRadius:5  }}
            onClick={() => {
                props.state.form = "bookspecs"
                props.state.book = props.book
                props.refresh()
               
            }} />

            <f-cc style={{padding:"5px 8px",width:"100%", height:40,
                direction:"ltr"
             }}>
                <f-12>{props.book.title}</f-12></f-cc>
            <hr style={{width:"80 %", opacity:0.2}}/>
            <f-csb style={{width:"100%" }}>

                <img src={props.state.cart.includes(props.book.title)?
                "https://cdn.ituring.ir/qepal/ok.svg":
                "https://cdn.ituring.ir/qepal/cart.svg"}
                style={{height:25, width:25, objectFit:"contain"}}/>

                <c-x style={{direction:"ltr", margin:"0 5px"}}>
                    <f-12><del>{(props.book.price as number).toLocaleString("fa-IR")} تومان</del></f-12>
                    <f-15>{(props.book.price*0.8 as number).toLocaleString("fa-IR")} تومان</f-15>
                </c-x> 
            </f-csb>

    </c-c>
}

