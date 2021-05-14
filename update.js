function update(input, model){
    const {billAmount} = input.billAmount
    const {percentage} = input.percentage
    const {tip} = model
    const {total} = model
    const newbillAmount = '$'+input.billAmount
    const newpercentage = input.percentage+'%'
    const newtip = input.billAmount*input.percentage/100
    const newtotal = input.billAmount*1 + newtip

    return {
        ...model,
        billAmount: newbillAmount,
        percentage: newpercentage,
        tip: '$'+newtip,
        total: '$'+newtotal,
        input: input
    }
}

module.exports = {
    update
}