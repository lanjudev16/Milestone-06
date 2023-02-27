// practice task number 01
let number = 5
number = 10
// console.log(number)

// const cNumber=2
// cNumber=10
// console.log(cNumber)

// practice task number 02

const name = 'Md Lanju Hossain'
const age = '23'
const user = {
    name: 'Md Mahammad Ali',
    age: '28'
}
const templateString = `I am ${name}
${age} years old 
I live in a small village
My country name is bangladesh
user part
user name is ${user.name}
${user.name} age is ${user.age}`

// console.log(templateString)

/* practice task number is 3.01 */

const userArrayFunction = x => x / 5
const result = userArrayFunction(10)
// console.log(result)

/* practice task number is 3.2 */

const twoParameterArrayFunction = (x, y) => {
    const xs = x + 2
    const ys = y + 2
    const result = xs * ys
    return result;
}
const twoParameterArrayFunctionResult = twoParameterArrayFunction(2, 3)
/* console.log(twoParameterArrayFunctionResult) */

/* practice task number 3.3 */

const threeArray = (x, y, z) => x * y * z
// console.log(threeArray(1,2,3))

/* practice task number 05 */
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const mapResult = arr.map(x => x * 5)
// console.log(mapResult)
// practice task number 06
const filterResult = arr.filter(x => x % 2 === 1)
// console.log(filterResult)

// practice task number 08
const user1 = {
    uname: 'Md Mahammad Ali',
    userAge: '28'
}
const { uname, userAge } = user1
// console.log(uname)
// console.log(userAge)

const arr1 = [2, 3, 4]
const [first, second, third] = arr1
const three = third
// console.log(three)

// practice task number 10

function threeParameter(a, b, c = 7) {
    return a + b + c
}
// console.log(threeParameter(1,2))


//practice task challenging number 01
let data = {
    Sophia: {
        id: 33,
        study: [
            {
                primary:
                    [
                        { school_name: "ABC primary school" },
                        { location: "Peters burg" }
                    ]
            },
            {
                secondary:
                    [
                        {
                            school_name: "ABC secondary school"

                        },

                        { location: "St Lorence" }
                    ]
            },
        ]
    }
}

// console.log(data.Sophia.study[1].secondary[1].location)



/* challenging task number 02 */

let data2 =
    [
        {
            "pHeroCourses": {
                "course-x": "web development"
            }
        },
        {
            "pHeroCourses": {
                "course-y": "phitron"
            }
        },
        {
            "pHeroCourses": {
                "course-z": "acc"
            }
        },
        {
            "pHeroCourses": {
                "course-xyz": "level-2"
            },
            "locationField": {
                "en-US": {
                    "lat": 19.28563,
                    "lon": 72.8691
                }
            }
        }
    ]

const length = data2.length
// console.log(data2[length-1].pHeroCourses["course-xyz"])
// console.log(data2[length-1].locationField["en-US"].lon)


// practice task number 03

let activities = {
    activity1: [
        {
            name: "listen on spotify",

            Programming Hero
        
        song_list: {

                song_1: "abc",
                song_2: "bcd"

            },
            id: 1
        },
        {
            name: "listen music through bot",

            song_list: {
                song_1: "wxy",
                song_2: "xyz"

            },
            id: 2
        }
    ]
}