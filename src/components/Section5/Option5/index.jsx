import React, {useState} from 'react';
import {OptionWrapper,LabelForInput,Result,OptionInfoDescription,OptionInfoHeading,OptionInfo,ResultNumber,OptionHeading,NumberInput,FormWrapper} from '../../Styles/OptionStyles';

const Option5 = () => {
     const [number1, setNumber1] = useState(0);
     const [number2, setNumber2] = useState(0);
     const [number3, setNumber3] = useState(0);
     const [number4, setNumber4] = useState(0);

     
     const [number2_1, setNumber2_1] = useState(0);
     const [number2_2, setNumber2_2] = useState(0);
     const [number2_3, setNumber2_3] = useState(0);
     const [number2_4, setNumber2_4] = useState(0);
     const [number2_5, setNumber2_5] = useState(0);
     const [number2_6, setNumber2_6] = useState(0);
     
     const formula = (num1,num2,num3,num4) => {
          const result = 0.53*Number(num1)+0.13*Number(num2)+0.18*Number(num3)+0.16*Number(num4);
          if(isNaN(result)||result===Infinity||result===-Infinity){
               return 0;
          }else{
               return result;
          }
     }
     const formula2 = (num1,num2,num3,num4,num5,num6) => {
          const result = 0.53*(Number(num1)/Number(num2))+0.13*(Number(num3)/Number(num4))+0.18*(Number(num2)/Number(num6))+0.16*(Number(num5)/Number(num6));
          if(isNaN(result)||result===Infinity||result===-Infinity){
               return 0;
          }else{
               return result;
          }
     }

     return (
          <OptionWrapper>
               <OptionHeading>Модель Таффлера (Z-счет Таффлера)</OptionHeading>
               <h3>Рассчитать по модели Таффлера⬇️</h3>
               <FormWrapper>
                    <NumberInput 
                         type="number" 
                         id="number1"
                         placeholder='К1'
                         onChange={(e) => setNumber1(e.target.value)}
                    />
                    <LabelForInput htmlFor="number1">Отношение прибыли от продаж до уплаты налога к сумме текущих обязательств⬆️</LabelForInput>
                    <NumberInput 
                         type="number" 
                         id="number2"
                         placeholder='К2'
                         onChange={(e) => setNumber2(e.target.value)}
                    />
                    <LabelForInput htmlFor="number2">Отношение суммы текущих активов к общей сумме обязательств⬆️</LabelForInput>
                    <NumberInput 
                         type="number" 
                         id="number3"
                         placeholder='К3'
                         onChange={(e) => setNumber3(e.target.value)}
                    />
                    <LabelForInput htmlFor="number3">Отношение суммы текущих обязательств к общей сумме активов⬆️</LabelForInput>
                    <NumberInput 
                         type="number" 
                         id="number4"
                         placeholder='К4'
                         onChange={(e) => setNumber4(e.target.value)}
                    />
                    <LabelForInput htmlFor="number4">Отношение выручки к общей сумме активов⬆️</LabelForInput>
               </FormWrapper>
               <Result>Модель Таффлера: <ResultNumber>{formula(number1,number2,number3,number4)}</ResultNumber></Result>
               <br/><br/>
               <h3>ИЛИ</h3>
               <br/><br/>

               <FormWrapper>
                    <NumberInput 
                         type="number" 
                         id="number2_1"
                         placeholder='К1'
                         onChange={(e) => setNumber2_1(e.target.value)}
                    />
                    <LabelForInput htmlFor="number2_1">Прибыль от продаж до уплаты налога⬆️</LabelForInput>
                    <NumberInput 
                         type="number" 
                         id="number2_2"
                         placeholder='К2'
                         onChange={(e) => setNumber2_2(e.target.value)}
                    />
                    <LabelForInput htmlFor="number2_2">Сумма текущих обязательств⬆️</LabelForInput>
                    <NumberInput 
                         type="number" 
                         id="number2_3"
                         placeholder='К3'
                         onChange={(e) => setNumber2_3(e.target.value)}
                    />
                    <LabelForInput htmlFor="number2_3">Сумма текущих активов⬆️</LabelForInput>
                    <NumberInput 
                         type="number" 
                         id="number2_4"
                         placeholder='К4'
                         onChange={(e) => setNumber2_4(e.target.value)}
                    />
                    <LabelForInput htmlFor="number2_4">Общая сумма обязательств⬆️</LabelForInput>
                    <NumberInput 
                         type="number" 
                         id="number2_5"
                         placeholder='К5'
                         onChange={(e) => setNumber2_5(e.target.value)}
                    />
                    <LabelForInput htmlFor="number2_5">Выручка⬆️</LabelForInput>
                    <NumberInput 
                         type="number" 
                         id="number2_6"
                         placeholder='К6'
                         onChange={(e) => setNumber2_6(e.target.value)}
                    />
                    <LabelForInput htmlFor="number2_6">Общая сумма активов⬆️</LabelForInput>
               </FormWrapper>
               <Result>Модель Таффлера: <ResultNumber>{formula2(number2_1,number2_2,number2_3,number2_4,number2_5,number2_6)}</ResultNumber></Result>  
     

               <div>
                    <OptionInfo>
                         <OptionInfoHeading>Определение</OptionInfoHeading>
                         <OptionInfoDescription>Модель Таффлера – методика прогнозирования банкротства предприятий на основе его финансовых показателей, предложенная в 1977 году британскими учеными Р. Таффлером и Г. Тишоу. Данная модель была разработана ими по результатам тестирования более ранней модели Альтмана на данных отчетности британских компаний как более соответствовавшая новым экономическим реалиям.
                         </OptionInfoDescription>
                    </OptionInfo>
                    <OptionInfo>
                         <OptionInfoHeading>Расчет (формула)</OptionInfoHeading>
                         <OptionInfoDescription>Четырехфакторная модель Таффлера имеет следующий вид:
                         <br/><br/>
                         Z = 0,53Х1 + 0,13Х2 + 0,18Х3 + 0,16Х4, где
                         <br/><br/>
                         Х1 – отношение прибыли от продаж до уплаты налога к сумме текущих обязательств;
                         <br/><br/>
                         Х2 – отношение суммы текущих активов к общей сумме обязательств;
                         <br/><br/>
                         Х3 – отношение суммы текущих обязательств к общей сумме активов;
                         <br/><br/>
                         Х4 – отношение выручки к общей сумме активов.
                         </OptionInfoDescription>
                    </OptionInfo>
                    <OptionInfo>
                         <OptionInfoHeading>Нормальное значение</OptionInfoHeading>
                         <OptionInfoDescription>Итоговое значение Z интерпретируется следующим образом. Если величина Z больше 0,3, это говорит о том, что у фирмы стабильное финансовое положение, если меньше 0,2 – существует значительная вероятность банкротства.   </OptionInfoDescription>
                    </OptionInfo>
               </div>
          </OptionWrapper>
     )
}

export default Option5;