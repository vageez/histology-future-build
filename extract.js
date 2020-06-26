const { exec } = require('child_process')
const number = 0

const destinationPath = `~/Documents/histology-future-build/ontile-slides/`

const command = i =>
  `unzip -qq ${source_slide_dir[number]}${i}.zip -d ${destinationPath}${dest_slide_dir[number]}`

const source_slide_dir = {
  '0': '~/Desktop/introduction-to-dynamic-histology-onetile/',
  '1': '~/Desktop/slides-1-to-19-onetile/',
  '2': '~/Desktop/slides-20-to-39-onetile/',
  '3': '~/Desktop/slides-40-to-59-onetile/',
  '4': '~/Desktop/slides-60-to-100-onetile/',
  '5': '~/Desktop/slides-101-to-110-onetile/',
  '6': '~/Desktop/staging-course-onetile/',
}

const dest_slide_dir = {
  '0': 'introduction-to-dynamic-histology/',
  '1': 'medical-histology/slides-1-to-19/',
  '2': 'medical-histology/slides-20-to-39/',
  '3': 'medical-histology/slides-40-to-59/',
  '4': 'medical-histology/slides-60-to-100/',
  '5': 'medical-histology/slides-101-to-110/',
  '6': 'staging-course/',
}
const files = {
  '0': [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
  ],
  '1': [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
  ],
  '2': [
    '20',
    '21',
    '22',
    '23',
    '24',
    '25lfside100x',
    '25rtside100x',
    '26',
    '27',
    '28',
    '29',
    '30',
    '31',
    '32',
    '33',
    '34',
    '35',
    '36',
    '37',
    '38',
    '39',
  ],
  '3': [
    '40',
    '41',
    '42',
    '43',
    '44',
    '45',
    '46',
    '47',
    '48',
    '49',
    '50',
    '51',
    '52',
    '53',
    '54',
    '55',
    '56',
    '57',
    '58',
    '59',
  ],
  '4': [
    '60',
    '61',
    '62',
    '63',
    '64',
    '65',
    '66',
    '67',
    '68',
    '69',
    '70',
    '71',
    '72',
    '73',
    '74',
    '75',
    '76',
    '77',
    '78',
    '79',
    '80',
    '81',
    '82',
    '83',
    '84',
    '85',
    '86',
    '87',
    '88',
    '89',
    '90',
    '91',
    '92',
    '93',
    '94',
    '95',
    '96',
    '97',
    '98',
    '99',
    '100',
  ],
  '5': ['101', '102', '103', '104', '105', '106', '107', '108', '109', '110'],
  '6': ['65', '66', '1469', '1444', '1447', '2482', '2484'],
}

const convert = ([head, ...tail]) => {
  if (head) {
    console.log(`Starting ${head}`)
    exec(command(head), { maxBuffer: 1024 * 500 }, (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`)
        return
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`)
        return
      }
      console.log(`stdout: Converted ${head}`)
      convert(tail)
    })
  } else {
    console.log(`ALL DONE :]`)
  }
}

convert(files[number])
