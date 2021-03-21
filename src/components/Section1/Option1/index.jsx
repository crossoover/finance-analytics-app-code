import React, {useState} from 'react';
import {OptionWrapper,Result,OptionInfoDescription,OptionInfoHeading,OptionInfo,ResultNumber,OptionHeading,NumberInput,FormWrapper} from '../../Styles/OptionStyles';

const Option1 = () => {
     const [number1, setNumber1] = useState(0);
     const [number2, setNumber2] = useState(1);
     
     const formula = (num1,num2) => {
           return Number(num1)/Number(num2);
     }

     return (
          <OptionWrapper>
               <OptionHeading>Коэффициент автономии</OptionHeading>
               <h3>Рассчитать коэффициент коэффициент автономии⬇️</h3>
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
                         placeholder='Активы'
                         onChange={(e) => setNumber2(e.target.value)}
                    />
               </FormWrapper>
               <Result>Коэффициент автономии: <ResultNumber>{formula(number1,number2)}</ResultNumber></Result>
               <div>
                    <OptionInfo>
                         <OptionInfoHeading>Определение</OptionInfoHeading>
                         <OptionInfoDescription>
                              Коэффициент автономии (коэффициент финансовой независимости) характеризует отношение собственного капитала к общей сумме капитала (активов) организации. Коэффициент показывает, насколько организация независима от кредиторов. Чем меньше значение коэффициента, тем в большей степени организация зависима от заемных источников финансирование, тем менее устойчивое у нее финансовое положение.

                         </OptionInfoDescription>
                    </OptionInfo>
                    <OptionInfo>
                         <OptionInfoHeading>Расчет (формула)</OptionInfoHeading>
                         <OptionInfoDescription>Коэффициент рассчитывается следующим образом:
                              <br/><br/>
                              Коэффициент автономии = Собственный капитал / Активы
                              <br/><br/>
                              И числитель, и знаменатель формулы отражены в бухгалтерском балансе организации, где величина активов всегда равна сумме собственного и заемного капитала организации.
                         </OptionInfoDescription>
                    </OptionInfo>
                    <OptionInfo>
                         <OptionInfoHeading>Нормальное значение</OptionInfoHeading>
                         <OptionInfoDescription>Общепринятое нормальное значение коэффициента автономии на практике: 0,5 и более (оптимальное 0,6-0,7). В мировой практике считается минимально допустимым до 30-40% собственного капитала. Но в любом случае данный показатель сильно зависит от отрасли, а точнее от соотношения в структуре организации внеоборотных и оборотных активов. Чем больше у организации доля внеоборотных активов (фондоемкое производство), тем больше долгосрочных источников требуется для их финансирования, а значит больше должна быть доля собственного капитала (выше коэффициент автономии).
                              <br/><br/>
                              Рост коэффициента автономии свидетельствует о том, что организация все больше полагается на собственные источники финансирования.
                              <br/><br/>
                              В мировой практике более распространенным является коэффициент финансовой зависимости (debt ratio), противоположный по смыслу коэффициенту автономии, но тоже характеризующий соотношение собственного и заемного капитала. Другим аналогичным показателем, используемым в западной практике, является коэффициент финансового левериджа (debt to equity ratio).</OptionInfoDescription>
                    </OptionInfo>
               </div>
               
          </OptionWrapper>
          
     )
}

export default Option1;