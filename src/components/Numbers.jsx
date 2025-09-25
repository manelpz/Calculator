import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const numbersArray = [1,2,3,4,5,6,7,8,9,0];

const renderButtons = onClickNumber => {
    const renderButton = number =>(
        <Button key={number} text={number.toString()} clickHandler={onClickNumber} />
    )
    return numbersArray.map((number1)=>renderButton(number1));
}

const Numbers = ({onClickNumber}) => (
    <section className="numbers">
        {renderButtons(onClickNumber)}
    </section>  
)

export default Numbers

Numbers.propTypes = {
    onClickNumber: PropTypes.func.isRequired
}
    