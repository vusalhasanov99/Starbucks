import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import Inputs from './Inputs'
import FromEnd from './formEnd/FormEnd'

function Form() {
    const datas = [
        {
            title: 'Personal Information',
            inputArr: [{
                label: 'First name',
                name: "firstname",
                type: "text",
                err: 'Enter your first name',
                x: <svg aria-hidden="true" className="valign-middle color-red flex-shrink-none" focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" style={{ width: "24px", height: "24px", overflow: "visible", fill: "currentcolor" }}><path d="M9.1005 3H14.8995C15.4299 3 15.9386 3.21071 16.3137 3.58579L20.4142 7.68629C20.7893 8.06136 21 8.57007 21 9.1005L21 14.8995C21 15.4299 20.7893 15.9386 20.4142 16.3137L16.3137 20.4142C15.9386 20.7893 15.4299 21 14.8995 21H9.10051C8.57007 21 8.06136 20.7893 7.68629 20.4142L3.58579 16.3137C3.21071 15.9386 3 15.4299 3 14.8995V9.10051C3 8.57007 3.21071 8.06136 3.58579 7.68629L7.68629 3.58579C8.06136 3.21071 8.57007 3 9.1005 3ZM16.7071 7.29289C16.3166 6.90237 15.6834 6.90237 15.2929 7.29289L12 10.5858L8.70711 7.29289C8.31658 6.90237 7.68342 6.90237 7.29289 7.29289C6.90237 7.68342 6.90237 8.31658 7.29289 8.70711L10.5858 12L7.29289 15.2929C6.90237 15.6834 6.90237 16.3166 7.29289 16.7071C7.68342 17.0976 8.31658 17.0976 8.70711 16.7071L12 13.4142L15.2929 16.7071C15.6834 17.0976 16.3166 17.0976 16.7071 16.7071C17.0976 16.3166 17.0976 15.6834 16.7071 15.2929L13.4142 12L16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289Z"></path></svg>,
            },
            {
                label: 'Last name',
                name: "lastname",
                type: "text",
                err: 'Enter your last name',
                x: <svg aria-hidden="true" className="valign-middle color-red flex-shrink-none" focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" style={{ width: "24px", height: "24px", overflow: "visible", fill: "currentcolor" }}><path d="M9.1005 3H14.8995C15.4299 3 15.9386 3.21071 16.3137 3.58579L20.4142 7.68629C20.7893 8.06136 21 8.57007 21 9.1005L21 14.8995C21 15.4299 20.7893 15.9386 20.4142 16.3137L16.3137 20.4142C15.9386 20.7893 15.4299 21 14.8995 21H9.10051C8.57007 21 8.06136 20.7893 7.68629 20.4142L3.58579 16.3137C3.21071 15.9386 3 15.4299 3 14.8995V9.10051C3 8.57007 3.21071 8.06136 3.58579 7.68629L7.68629 3.58579C8.06136 3.21071 8.57007 3 9.1005 3ZM16.7071 7.29289C16.3166 6.90237 15.6834 6.90237 15.2929 7.29289L12 10.5858L8.70711 7.29289C8.31658 6.90237 7.68342 6.90237 7.29289 7.29289C6.90237 7.68342 6.90237 8.31658 7.29289 8.70711L10.5858 12L7.29289 15.2929C6.90237 15.6834 6.90237 16.3166 7.29289 16.7071C7.68342 17.0976 8.31658 17.0976 8.70711 16.7071L12 13.4142L15.2929 16.7071C15.6834 17.0976 16.3166 17.0976 16.7071 16.7071C17.0976 16.3166 17.0976 15.6834 16.7071 15.2929L13.4142 12L16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289Z"></path></svg>,
            }
            ]

        },
        {
            title: 'Account Security',
            inputArr: [{
                label: 'Email Address',
                type: "email",
                name: "email",
                err: 'Please enter your email address.',
                emailAlert: "This will be your username",
                x: <svg aria-hidden="true" className="valign-middle color-red flex-shrink-none" focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" style={{ width: "24px", height: "24px", overflow: "visible", fill: "currentcolor" }}><path d="M9.1005 3H14.8995C15.4299 3 15.9386 3.21071 16.3137 3.58579L20.4142 7.68629C20.7893 8.06136 21 8.57007 21 9.1005L21 14.8995C21 15.4299 20.7893 15.9386 20.4142 16.3137L16.3137 20.4142C15.9386 20.7893 15.4299 21 14.8995 21H9.10051C8.57007 21 8.06136 20.7893 7.68629 20.4142L3.58579 16.3137C3.21071 15.9386 3 15.4299 3 14.8995V9.10051C3 8.57007 3.21071 8.06136 3.58579 7.68629L7.68629 3.58579C8.06136 3.21071 8.57007 3 9.1005 3ZM16.7071 7.29289C16.3166 6.90237 15.6834 6.90237 15.2929 7.29289L12 10.5858L8.70711 7.29289C8.31658 6.90237 7.68342 6.90237 7.29289 7.29289C6.90237 7.68342 6.90237 8.31658 7.29289 8.70711L10.5858 12L7.29289 15.2929C6.90237 15.6834 6.90237 16.3166 7.29289 16.7071C7.68342 17.0976 8.31658 17.0976 8.70711 16.7071L12 13.4142L15.2929 16.7071C15.6834 17.0976 16.3166 17.0976 16.7071 16.7071C17.0976 16.3166 17.0976 15.6834 16.7071 15.2929L13.4142 12L16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289Z"></path></svg>,
            },
            {
                label: 'Password',
                name: "password",
                type: "password",
                err: 'From 8 to 25 characters',
                alert: 'Create a password 8 to 25 characters long that includes at least 1 uppercase and 1 lowercase letter, 1 number and 1 special character like an exclamation point or asterisk.',

                x: <svg aria-hidden="true" className="valign-middle color-red flex-shrink-none" focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" style={{ width: "24px", height: "24px", overflow: "visible", fill: "currentcolor" }}><path d="M9.1005 3H14.8995C15.4299 3 15.9386 3.21071 16.3137 3.58579L20.4142 7.68629C20.7893 8.06136 21 8.57007 21 9.1005L21 14.8995C21 15.4299 20.7893 15.9386 20.4142 16.3137L16.3137 20.4142C15.9386 20.7893 15.4299 21 14.8995 21H9.10051C8.57007 21 8.06136 20.7893 7.68629 20.4142L3.58579 16.3137C3.21071 15.9386 3 15.4299 3 14.8995V9.10051C3 8.57007 3.21071 8.06136 3.58579 7.68629L7.68629 3.58579C8.06136 3.21071 8.57007 3 9.1005 3ZM16.7071 7.29289C16.3166 6.90237 15.6834 6.90237 15.2929 7.29289L12 10.5858L8.70711 7.29289C8.31658 6.90237 7.68342 6.90237 7.29289 7.29289C6.90237 7.68342 6.90237 8.31658 7.29289 8.70711L10.5858 12L7.29289 15.2929C6.90237 15.6834 6.90237 16.3166 7.29289 16.7071C7.68342 17.0976 8.31658 17.0976 8.70711 16.7071L12 13.4142L15.2929 16.7071C15.6834 17.0976 16.3166 17.0976 16.7071 16.7071C17.0976 16.3166 17.0976 15.6834 16.7071 15.2929L13.4142 12L16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289Z"></path></svg>,
                show: <svg aria-hidden="true" className="valign-middle " focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" style={{ width: "24px", height: "24px", overflow: "visible", fill: "currentcolor" }}><path d="M12.1288,9.9698 C10.9654659,9.9698 10.0194,10.9158659 10.0194,12.0792 C10.0194,13.2425341 10.9654659,14.1886 12.1288,14.1886 C13.2921341,14.1886 14.2382,13.2425341 14.2382,12.0792 C14.2382,10.9158659 13.2921341,9.9698 12.1288,9.9698 M12.1288,15.2433 C10.3843262,15.2433 8.9647,13.8236738 8.9647,12.0792 C8.9647,10.3347262 10.3843262,8.9151 12.1288,8.9151 C13.8732738,8.9151 15.2929,10.3347262 15.2929,12.0792 C15.2929,13.8236738 13.8732738,15.2433 12.1288,15.2433 M1.2137,12.1086953 C2.33484719,13.4091441 6.79306841,18.1648 11.9990726,18.1648 C17.2050769,18.1648 21.6643528,13.4091441 22.7855,12.10975 C21.6643528,10.8093012 17.2050769,6.0547 11.9990726,6.0547 C6.7856855,6.0547 2.33273778,10.8093012 1.2137,12.1086953 M11.9990771,19.2195 C5.48102086,19.2195 0.327748542,12.7109305 0.111534701,12.4335437 C-0.0371782336,12.2436972 -0.0371782336,11.9758028 0.111534701,11.7849016 C0.327748542,11.5075148 5.48102086,5 11.9990771,5 C18.5181881,5 23.6714604,11.5075148 23.8876743,11.7849016 C24.0374419,11.9758028 24.0374419,12.2436972 23.8876743,12.4335437 C23.6714604,12.7109305 18.5181881,19.2195 11.9990771,19.2195"></path></svg>,
                hide: <svg aria-hidden="true" className="valign-middle " focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" style={{ width: "24px", height: "24px", overflow: "visible", fill: "currentcolor" }}><path d="M22.7666,12.0294463 C22.0125135,11.2099699 19.8884152,9.08797941 17.0977677,7.6916 L14.4874682,10.3008467 C14.8397268,10.8049777 15.0348401,11.4019193 15.0348401,12.0294463 C15.0348401,13.7032032 13.6732656,15.0647786 11.9995099,15.0647786 C11.3719834,15.0647786 10.7760968,14.8696652 10.2709116,14.5174063 L7.9517,16.8366195 C9.33225842,17.3924292 10.6917235,17.6909 11.9995099,17.6909 C17.1779223,17.6909 21.6011935,13.295047 22.7666,12.0294463 M13.7217084,11.0676 L11.0376,13.7517084 C11.3297407,13.9151806 11.6556305,14.0101 11.9994495,14.0101 C13.0920767,14.0101 13.9801,13.1220767 13.9801,12.0294495 C13.9801,11.6856305 13.8851806,11.3597407 13.7217084,11.0676 M23.8781861,12.3658587 C23.6619796,12.6263607 18.5088818,18.7455213 11.9994836,18.7455213 C10.4238127,18.7455213 8.79224449,18.3647876 7.14591096,17.6423428 L4.60838471,20.1809191 C4.50502745,20.2832215 4.37003021,20.3349 4.23503297,20.3349 C4.10003573,20.3349 3.96503849,20.2832215 3.86273589,20.1809191 C3.65602137,19.9742049 3.65602137,19.6409311 3.86273589,19.4342169 L16.6336857,6.66329032 C16.6389591,6.658017 16.6442324,6.65274368 16.6495057,6.64852502 L19.142736,4.15424461 C19.3483959,3.94858513 19.682725,3.94858513 19.8883848,4.15424461 C20.0940447,4.36095876 20.0940447,4.69423259 19.8883848,4.89989207 L17.8876836,6.90164438 C21.4144865,8.75574373 23.7727195,11.5664233 23.8781861,11.692983 C24.0406046,11.8880959 24.0406046,12.1707458 23.8781861,12.3658587 M10.0378313,11.7562456 C10.1601725,10.8713937 10.8636339,10.1763789 11.7484978,10.0645859 C12.0374759,10.0287278 12.2420809,9.76506513 12.2062223,9.47609085 C12.1703637,9.18711657 11.9151348,8.98462364 11.6166647,9.01837246 C10.259311,9.18922587 9.18038879,10.2554777 8.99265844,11.6117584 C8.95258118,11.8996781 9.15507683,12.1665047 9.44300035,12.2055267 C9.46725764,12.2097453 9.4925696,12.2108 9.51577222,12.2108 C9.77521978,12.2108 10.0009181,12.0199082 10.0378313,11.7562456 M5.18633767,16.5424 C5.09036274,16.5424 4.99227847,16.5160333 4.90579556,16.4622452 C2.04025831,14.6598169 0.198805216,12.4587239 0.121814337,12.3659131 C-0.0406047789,12.1707994 -0.0406047789,11.8881483 0.121814337,11.6930346 C0.338021601,11.4325315 5.49008251,5.3144 11.9995032,5.3144 C12.9972206,5.3144 14.0244688,5.46099891 15.054881,5.75314206 C15.3364777,5.83224219 15.4988969,6.12333068 15.4197966,6.40387248 C15.3396417,6.68335961 15.0464436,6.84577855 14.7690655,6.76773308 C13.8314642,6.50301131 12.900191,6.36906842 11.9995032,6.36906842 C6.82107553,6.36906842 2.39884597,10.7638717 1.23238141,12.0294738 C1.85252712,12.703407 3.39234471,14.2643162 5.46687978,15.568941 C5.71367246,15.7239773 5.78749933,16.0498698 5.63246291,16.2956076 C5.5322693,16.4559172 5.36141282,16.5424 5.18633767,16.5424"></path></svg>
            }
            ]

        }



    ]


   
    return (
        <form  className="formBg">
            <div className='form'>
                <p>* indicates required field</p>
                {datas.map(item => (
                    <Inputs key={nanoid()}  {...item} />
                ))}
                <FromEnd />

            </div>
        </form>
    )
}

export default Form
