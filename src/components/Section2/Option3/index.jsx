import React, {useState} from 'react';
import {OptionWrapper,Result,OptionInfoDescription,OptionInfoHeading,OptionInfo,ResultNumber,OptionHeading,NumberInput,FormWrapper} from '../../Styles/OptionStyles';

const Option3 = () => {
     const [number1, setNumber1] = useState(0);
     const [number2, setNumber2] = useState(0);
     const [number3, setNumber3] = useState(1);
     
     const formula = (num1,num2,num3) => {
           return (Number(num1)-Number(num2))/Number(num3);
     }

     return (
          <OptionWrapper>
               <OptionHeading>Коэффициент обеспеченности собственными средствами</OptionHeading>
               <h3>Рассчитать коэффициент обеспеченности собственными средствами⬇️</h3>
               <FormWrapper>
                    <NumberInput 
                         type="number" 
                         name="number1"
                         placeholder='Собственный капитал'
                         onChange={(e) => setNumber1(e.target.value)}
                    />
                    <NumberInput 
                         type="number" 
                         name="number2"
                         placeholder='Внеоборотные активы'
                         onChange={(e) => setNumber2(e.target.value)}
                    />
                    <NumberInput 
                         type="number" 
                         name="number3"
                         placeholder='Оборотные активы'
                         onChange={(e) => setNumber3(e.target.value)}
                    />
               </FormWrapper>
               <Result>Коэффициент обеспеченности собственными средствами: <ResultNumber>{formula(number1,number2, number3)}</ResultNumber></Result>
               <div>
                    <OptionInfo>
                         <OptionInfoHeading>Определение</OptionInfoHeading>
                         <OptionInfoDescription>Коэффициент обеспеченности собственными оборотными средствами (СОС) показывает достаточность у организации собственных средств для финансирования текущей деятельности.</OptionInfoDescription>
                    </OptionInfo>
                    <OptionInfo>
                         <OptionInfoHeading>Расчет (формула)</OptionInfoHeading>
                         <OptionInfoDescription>
                         Коэффициент обеспеченности СОС = (Собственный капитал – Внеоборотные активы) / Оборотные активы
                              <br/>
                         Смысл данного коэффициента заключается в следующем. Сначала, в числителе формулы вычитают из собственного капитала внеоборотные активы. Считается, что самые низколиквидные (внеоборотные) активы должны финансировать за счет самых устойчивых источников – собственного капитала. Более того, должна остаться еще некоторая часть собственного капитала для финансирования текущей деятельности.
                         </OptionInfoDescription>
                    </OptionInfo>
                    <OptionInfo>
                         <OptionInfoHeading>Нормальное значение</OptionInfoHeading>
                         <OptionInfoDescription>Данный коэффициент не имеет распространения в западной практике финансового анализа. Он используется как признак несостоятельности (банкротства) организации. Согласно указанным документам, нормальное значение коэффициента обеспеченности собственными средствами должно составлять не менее 0,1. Следует отметить, что это достаточно жесткий критерий, свойственный только российской практике финансового анализа; большинству предприятий сложно достичь указного значения коэффициента.</OptionInfoDescription>
                    </OptionInfo>
               </div>
          </OptionWrapper>
     )
}

export default Option3;