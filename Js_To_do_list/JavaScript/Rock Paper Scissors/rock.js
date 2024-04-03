const selectionButton = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const computerScoreSpan = document.querySelector('[data-computer-score]')
const youScoreSpan = document.querySelector('[data-your-score]')

const SELECTION =[
    {name:'rock',
     emoji:'✊',
     beats:'scissors'
    },
    {name:'scissors',
     emoji:'✌️',
     beats:'paper'
    },
    {name:'paper',
     emoji:'🖐',
     beats:'rock'
    }
]

selectionButton.forEach(selectionButton=>{
    selectionButton.addEventListener('click', e=>{
    const selectionName = selectionButton.dataset.selection
    const selection = SELECTION.find(selection => selection.name === selectionName)
    makeSelection(selection)
    })
})

function makeSelection(selection){
    const computerSelection= Randomselection()
    const yourwinner = IsWinner(selection, computerSelection)
    const computerwinner = IsWinner(computerSelection, selection)

    addSelectionResult(computerSelection, computerwinner)
    addSelectionResult(selection, yourwinner)
    
    if(computerwinner) IncrementScore(computerScoreSpan)
    if(yourwinner) IncrementScore(youScoreSpan)
}   

function IncrementScore(scoreSpan){
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

function addSelectionResult(selection, winner){
    const div = document.createElement('div')
    div.innerText = selection.emoji
    div.classList.add('result-selection')
    if (winner) div.classList.add('winner')
    finalColumn.after(div)
}

function IsWinner(selction, computer){
   return selction.beats === computer.name
}

function Randomselection(){
   const randIndex = Math.floor(Math.random() * SELECTION.length)
   return SELECTION[randIndex] 
}

