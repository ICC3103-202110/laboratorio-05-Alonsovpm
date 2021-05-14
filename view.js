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
            type: 'input1',
            message: message1,
            default: input,
            validate: function(value){
                if(value < 0){
                    return 'Enter a positive value'
                } else {
                    return true
                }
            }
        },
        {
            name: 'input2',
            type: 'input2',
            message: message2,
            default: input,
            validate: function(value){
                if(value > 100 || value < 0){
                    return 'Enter a value from 0 to 100'
                } else {
                    return true
                }
            }
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