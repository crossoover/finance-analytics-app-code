import React, {useState} from 'react';
import {OptionWrapper,Result,OptionInfoDescription,OptionInfoHeading,OptionInfo,ResultNumber,OptionHeading,NumberInput,FormWrapper} from '../../Styles/OptionStyles';

const Option3 = () => {
     const [number1, setNumber1] = useState(0);
     const [number2, setNumber2] = useState(1);
     
     const formula = (num1,num2) => {
           return Number(num1)/Number(num2);
     }

     return (
          <OptionWrapper>
               <OptionHeading>Коэффициент обеспеченности запасов</OptionHeading>
               <h3>Рассчитать коэффициент обеспеченности запасов⬇️</h3>
               <FormWrapper>
                    <NumberInput 
                         type="number" 
                         name="number1"
                         placeholder='Собственные оборотные средства'
                         onChange={(e) => setNumber1(e.target.value)}
                    />
                    <NumberInput 
                         type="number" 
                         name="number2"
                         placeholder='Запасы'
                         onChange={(e) => setNumber2(e.target.value)}
                    />
               </FormWrapper>
               <Result>Коэффициент обеспеченности запасов: <ResultNumber>{formula(number1,number2)}</ResultNumber></Result>
               <div>
                    <OptionInfo>
                         <OptionInfoHeading>Определение</OptionInfoHeading>
                         <OptionInfoDescription>
                         Коэффициент обеспеченности запасов – это показатель финансовый устойчивости организации, определяющий, в какой степени материальные запасы организации покрыты ее собственными оборотными средствами.
                         </OptionInfoDescription>
                    </OptionInfo>
                    <OptionInfo>
                         <OptionInfoHeading>Расчет (формула)</OptionInfoHeading>
                         <OptionInfoDescription>Коэффициент обеспеченности материальных запасов = Собственные оборотные средства / Запасы
                         <br/><br/>
                         В этой формуле "Собственные оборотные средства" – расчетный показатель, получают его как разницу между собственным капиталом организации и вложениями в долгосрочные (внеоборотные) активы.
                         <br/><br/>
                         В переводе на строки Бухгалтерского баланса, формула выглядит следующим образом:
                         <br/><br/>
                         Коэффициент обеспеченности материальных запасов = (стр. 1300 – стр. 1100 ) / стр. 1210
                         <br/><br/>
                         При этом к строке 1300 рекомендуется добавить доходы будущих периодов, возникшие в связи с безвозмездным получением имущества и государственной помощи, которые в Балансе отражаются в строке 1530, но правилами Минфина по расчету чистых активов приравнены к собственному капиталу организации.
                         </OptionInfoDescription>
                    </OptionInfo>
                    <OptionInfo>
                         <OptionInfoHeading>Нормальное значение</OptionInfoHeading>
                         <OptionInfoDescription>Считается нормальным, если запасы организации хотя бы на 50% обеспечены собственными оборотными средствами (т.е. коэффициент должен быть 0,5 и более). Оптимальное значение: 60-80%.

Если все собственные средства организации вложены во внеоборотные активы (здания, сооружения, станки, транспорт и т.п.) и на запасы ничего не приходится, коэффициент окажется отрицательным, что говорит о крайне неустойчивом финансовом положении организации.</OptionInfoDescription>
                    </OptionInfo>
               </div>
          </OptionWrapper>
     )
}

export default Option3;