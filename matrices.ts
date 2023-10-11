type CellValue = 'X' | 'O' | '';
type GameBoard = [
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue]
]

const triki: GameBoard = [
  ['X', 'X', 'O'],
  ['X', 'X', 'O'],
  ['X', 'X', 'O'],
]

//? React Example
type State = [string, (newHero: string) => void];

const [hero, setHero]: State = useState('Flash')

//? Basic Example
type RGB = [number, number, number];
const blue: RGB = [0, 0, 255];