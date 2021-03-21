import React, {useState} from 'react';
import {OptionWrapper,Result,OptionInfoDescription,OptionInfoHeading,OptionInfo,ResultNumber,OptionHeading,NumberInput,FormWrapper} from '../../Styles/OptionStyles';

const Option5 = () => {
     const [number1, setNumber1] = useState(0);
     const [number2, setNumber2] = useState(0);
     const [number3, setNumber3] = useState(1);
     
     const formula = (num1,num2,num3) => {
           return (Number(num1)+Number(num2))/Number(num3);
     }

     return (
          <OptionWrapper>
               <OptionHeading>Коэффициент покрытия инвестиций</OptionHeading>
               <h3>Рассчитать коэффициент покрытия инвестиций⬇️</h3>
               <FormWrapper>
               <NumberInput 
                         type="number" 
                         name="number1"
                         placeholder='Долгосрочные обязательства'
                         onChange={(e) => setNumber1(e.target.value)}
                    />
                    <NumberInput 
                         type="number" 
                         name="number2"
                         placeholder='Собственный капитал'
                         onChange={(e) => setNumber2(e.target.value)}
                    />
                    <NumberInput 
                         type="number" 
                         name="number3"
                         placeholder='Общий капитал'
                         onChange={(e) => setNumber3(e.target.value)}
                    />
               </FormWrapper>
               <Result>Коэффициент покрытия инвестиций: <ResultNumber>{formula(number1,number2,number3)}</ResultNumber></Result>
               <div>
                    <OptionInfo>
                         <OptionInfoHeading>Определение</OptionInfoHeading>
                         <OptionInfoDescription>
                         Коэффициент покрытия инвестиций – это финансовый коэффициент, показывающий, какая часть активов организации финансируется за счет устойчивых источников: собственных средств и долгосрочных пассивов. Другое название показателя – коэффициент долгосрочной финансовой независимости.
                         </OptionInfoDescription>
                    </OptionInfo>
                    <OptionInfo>
                         <OptionInfoHeading>Расчет (формула)</OptionInfoHeading>
                         <OptionInfoDescription>
                         Коэффициент покрытия инвестиций = (Собственный капитал+F1[1400])/F1[1600],
                         <br/><br/>
                         где
                         <br/>
                         Собственный капитал = сумме раздела Баланса "Капитал и резервы" плюс задолженность учредителей по взносам в уставный капитал;
                         <br/>
                         F1[1400] – строка баланса "Итого долгосрочные обязательства";
                         <br/>
                         F1[1600] – итого Баланс (т.е. общая сумма активов организации).
                         </OptionInfoDescription>
                    </OptionInfo>
                    <OptionInfo>
                         <OptionInfoHeading>Нормальное значение</OptionInfoHeading>
                         <OptionInfoDescription>Если коэффициент близок к 1 или больше, это говорит о полном покрытии долгосрочных вложений в деятельность предприятия собственными средствами и заемными средствами с длительным сроком возврата. При значении менее 0,7-0,8 возможно ситуация, при которой организация не сможет рассчитаться с кредиторами по той причине, что использовала краткосрочные займы и привлеченные на короткие сроки денежные средства для покупки внеоборотных активов (зданий, оборудования и т.п.), которые принесут денежную отдачу позже. В таком случае инвестору следует проанализировать другие показатели платежеспособности на предмет устойчивости финансового положения организации.</OptionInfoDescription>
                    </OptionInfo>
               </div>
          </OptionWrapper>
     )
}

export default Option5;