import React from 'react'
import accounting from 'accounting'
import { Button, makeStyles } from '@material-ui/core'
import { getBasketTotal } from '../Reducers/reducer'
import { useStateValue } from '../Reducers/StateProvider';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '25vh',
    },
    button: {
        marginTop: '2rem'
    }
}))

const Total = () => {

    const [{ basket }, dispatch] = useStateValue();
    const classes = useStyles()
    console.log(getBasketTotal(basket))
    return (
        <div className={classes.root}>
            <h5>
                Total items: {basket?.length}
            </h5>
            <h5>
                {accounting.formatMoney(getBasketTotal(basket), '$')}

            </h5>
            <Button className={classes.button} variant='contained' color='secondary'> Check out</Button>
        </div>
    )
}

export default Total
