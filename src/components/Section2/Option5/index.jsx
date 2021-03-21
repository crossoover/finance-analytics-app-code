import React, {useState} from 'react';
import {OptionWrapper,Result,OptionInfoDescription,OptionInfoHeading,OptionInfo,ResultNumber,OptionHeading,NumberInput,FormWrapper} from '../../Styles/OptionStyles';

const Option5 = () => {
     const [number1, setNumber1] = useState(0);
     const [number2, setNumber2] = useState(0);
     const [number2_1, setNumber2_1] = useState(0);
     const [number2_2, setNumber2_2] = useState(0);
     const [number2_3, setNumber2_3] = useState(0);
     
     const formula = (num1,num2) => {
          return Number(num1)-Number(num2);
    }

    const formula2 = (num1,num2,num3) => {
          return (Number(num1)+Number(num2))-Number(num3);
     }    

     return (
          <OptionWrapper>
               <OptionHeading>Рабочий капитал</OptionHeading>
               <h3>Рассчитать рабочий капитал по <u>двум</u> критериям⬇️</h3>
               <FormWrapper>
                    <NumberInput 
                         type="number" 
                         name="number1"
                         placeholder='Оборотные активы'
                         onChange={(e) => setNumber1(e.target.value)}
                    />
                    <NumberInput 
                         type="number" 
                         name="number2"
                         placeholder='Краткосрочные обязательства'
                         onChange={(e) => setNumber2(e.target.value)}
                    />
               </FormWrapper>
               <Result>Рабочий капитал: <ResultNumber>{formula(number1,number2)}</ResultNumber></Result>
               <br/><br/>
               <h2>ИЛИ</h2>
               <br/><br/>
               <h3>Рассчитать рабочий капитал по <u>трем</u> критериям⬇️</h3>
               <FormWrapper>
                    <NumberInput 
                         type="number" 
                         name="number2_1"
                         placeholder='Собственный капитал'
                         onChange={(e) => setNumber2_1(e.target.value)}
                    />
                    <NumberInput 
                         type="number" 
                         name="number2_2"
                         placeholder='Долгосрочные обязательства'
                         onChange={(e) => setNumber2_2(e.target.value)}
                    />
                    <NumberInput 
                         type="number" 
                         name="number2_3"
                         placeholder='Внеоборотные активы'
                         onChange={(e) => setNumber2_3(e.target.value)}
                    />
               </FormWrapper>
               <Result>Рабочий капитал: <ResultNumber>{formula2(number2_1,number2_2,number2_3)}</ResultNumber></Result>

               <div>
                    <OptionInfo>
                         <OptionInfoHeading>Определение</OptionInfoHeading>
                         <OptionInfoDescription>Рабочий капитал – дословный перевод принятого на западе термина " working capital" (также используется понятие "чистый рабочий капитал"). В российской практике показатель известен под названием "собственные оборотные средства". Рабочий капитал – размер капитала, который имеется у организации для финансирования его текущей деятельности (т.е. приобретения оборотных активов в ходе нормально производственного цикла).</OptionInfoDescription>
                    </OptionInfo>
                    <OptionInfo>
                         <OptionInfoHeading>Расчет (формула)</OptionInfoHeading>
                         <OptionInfoDescription>
                         Формула расчета рабочего капитала следующая:
                         Рабочий капитал = Оборотные активы – Краткосрочные обязательства
                         <br/><br/>
                         Другой способ получить точно такое же значение:
                         <br/><br/>
                         Рабочий капитал = (Собственный капитал + Долгосрочные обязательства) - Внеоборотные активы
                         </OptionInfoDescription>
                    </OptionInfo>
                    <OptionInfo>
                         <OptionInfoHeading>Управление рабочим капиталом</OptionInfoHeading>
                         <OptionInfoDescription>
                         Управление рабочим капиталом состоит в контроле его величины таким образом, чтобы она была оптимальной. Под оптимальной понимается такая величина рабочего капитала, которая, с одной стороны, позволяет предприятию вести нормальную бесперебойную операционную деятельность, с другой - не раздута до такой степени, что замораживает, выводит из оборота значительные средства организации.
                         </OptionInfoDescription>
                    </OptionInfo>
               </div>
          </OptionWrapper>
     )
}

export default Option5;