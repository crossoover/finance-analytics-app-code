import React, {useState} from 'react';
import {OptionWrapper,Result,OptionInfoDescription,OptionInfoHeading,OptionInfo,ResultNumber,OptionHeading,NumberInput,FormWrapper, LabelForInput} from '../../Styles/OptionStyles';

const Option1 = () => {
     const [number1, setNumber1] = useState(0);
     const [number2, setNumber2] = useState(0);
     const [number3, setNumber3] = useState(0);
     
     const formula = (num1,num2,num3) => {
          const result = Number(num1)+Number(num2)-Number(num3);
          if(isNaN(result)||result===Infinity||result===-Infinity){
               return 0;
          }else{
               return result;
          }
     }

     return (
          <OptionWrapper>
               <OptionHeading>Денежный цикл (цикл оборотного капитала)</OptionHeading>
               <h3>Рассчитать денежный цикл⬇️</h3>
               <FormWrapper>
                    <NumberInput 
                         type="number" 
                         id="number1"
                         placeholder='K1'
                         onChange={(e) => setNumber1(e.target.value)}
                    />
                    <LabelForInput htmlFor='number1'>Оборачиваемость запасов в днях⬆️</LabelForInput>
                    <NumberInput 
                         type="number" 
                         id="number2"
                         placeholder='K2'
                         onChange={(e) => setNumber2(e.target.value)}
                    />
                    <LabelForInput htmlFor='number2'>Оборачиваемость дебиторской задолженности в днях⬆️</LabelForInput>
                    <NumberInput 
                         type="number" 
                         id="number3"
                         placeholder='K3'
                         onChange={(e) => setNumber3(e.target.value)}
                    />
                    <LabelForInput htmlFor='number3'>Оборачиваемость кредиторской задолженности в днях⬆️</LabelForInput>
               </FormWrapper>
               <Result>EBIT:  <ResultNumber>{formula(number1,number2,number3)}</ResultNumber></Result>
               <div>
                    <OptionInfo>
                         <OptionInfoHeading>Определение</OptionInfoHeading>
                         <OptionInfoDescription>Денежный цикл, или цикл оборотного капитала (cash conversion cycle, operating cycle) – это период обращение денежных средств с момента приобретения за них ресурсов (сырья, материалов, рабочей силы) и до момента продажи готовой продукции и получения за нее денег. Данный период выражается в днях и отражает эффективность управления оборотным капиталом организации.
                         </OptionInfoDescription>
                    </OptionInfo>
                    <OptionInfo>
                         <OptionInfoHeading>Расчет (формула)</OptionInfoHeading>
                         <OptionInfoDescription>Цикл движения денежных средств представляют в виде суммы трех показателей оборачиваемости, выраженных в днях: оборачиваемость запасов, оборачиваемость дебиторской задолженности и оборачиваемость кредиторской задолженности:
                         <br/><br/>
                         Денежный цикл (в днях) = Оборачиваемость запасов в днях + Оборачиваемость дебиторской задолженности в днях – Оборачиваемость кредиторской задолженности в днях
                         </OptionInfoDescription>
                    </OptionInfo>
                    <OptionInfo>
                         <OptionInfoHeading>Нормальное значение</OptionInfoHeading>
                         <OptionInfoDescription>Короткий денежный цикл позволяет организации быстрее вернуть денежные средства, вложенные в оборотные активы. Чем меньше цикл, тем лучше для организации. Однако конкретная оптимальная длительность денежного цикла сильно зависит от отрасли и особенностей деятельности предприятия. Встречаются даже случаи, когда предприятие имеет отрицательный показатель денежного цикла. Например, такое встречается у предприятий занимающих настолько прочные позиции рыночные позиции, что они могут диктовать условия и покупателям (сокращая период оплаты за свою продукцию) и поставщиками (получая у них отсрочку оплаты).</OptionInfoDescription>
                    </OptionInfo>
               </div>
          </OptionWrapper>
     )
}

export default Option1;