const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function getTitle(){
    return chalk.green(
        figlet.textSync(
            'Tip Calculator App',{
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}
function getTable(model){
    const {billAmount} = model
    const {percentage} = model
    const {tip} = model
    const {total} = model
    return[
        {
            'BillAmount': billAmount,
            'Tip (%)': percentage,
            'Tip': tip,
            'Total': total,
        }
    ]
}
function inputForm(model){
    const{input} = model
    const message1 = 'Bill Amount? '
    const message2 = 'Tip(%)? '
    return inquirer.prompt([
        {
            name: 'input1',
            type: 'input',
            message: message1,
            default: input,
        },
        {
            name: 'input2',
            type: 'input',
            message: message2,
            default: input,
        }
    ])
}

function listForm(model){
    const {input} = model
    const message1 = 'Bill Amount? '
    const message2 = 'Tip(%)? '
    return inquirer.prompt([
        {
            name: 'input1',
            type: 'list',
            message: message1,
            default: input,
        },
        {
            name: 'input2',
            type: 'list',
            message: message2,
            default: input,
        }
    ])
}

function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = {
    view, 
    inputForm,
    listForm
}