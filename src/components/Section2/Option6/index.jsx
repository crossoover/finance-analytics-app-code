import React, {useState} from 'react';
import {OptionWrapper,Result,OptionInfoDescription,OptionInfoHeading,OptionInfo,ResultNumber,OptionHeading,NumberInput,FormWrapper} from '../../Styles/OptionStyles';

const Option6 = () => {
     const [number1, setNumber1] = useState(0);
     const [number2, setNumber2] = useState(0);
     
     const formula = (num1,num2) => {
          return Number(num1)-Number(num2);
     }


     return (
          <OptionWrapper>
               <OptionHeading>Собственные оборотные средства</OptionHeading>
               <h3>Рассчитать cобственные оборотные средства⬇️</h3>
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
               <Result>Собственные оборотные средства: <ResultNumber>{formula(number1,number2)}</ResultNumber></Result>
               
               <div>
                    <OptionInfo>
                         <OptionInfoHeading>Определение</OptionInfoHeading>
                         <OptionInfoDescription>Собственные оборотные средства, или рабочий капитал (working capital, net working capital) – это сумма, на которую оборотные активы организации превышают ее краткосрочные обязательства. Данный показатель используется для оценки возможности предприятия рассчитаться по краткосрочным обязательствам, реализовав все свои оборотные активы.
                         <br/><br/>
                         Собственные оборотные средства определяют степень платежеспособности и финансовой устойчивости организации.</OptionInfoDescription>
                    </OptionInfo>
                    <OptionInfo>
                         <OptionInfoHeading>Расчет (формула)</OptionInfoHeading>
                         <OptionInfoDescription>
                         Собственные оборотные средства (СОС) = Оборотные активы – Краткосрочные обязательства
                         <br/><br/>
                         Такое же значение можно получить другим способом:
                         <br/><br/>
                         Собственные оборотные средства (СОС) = (Собственный капитал + Долгосрочные обязательства) - Внеоборотные активы
                         </OptionInfoDescription>
                    </OptionInfo>
                    <OptionInfo>
                         <OptionInfoHeading>Нормальное значение</OptionInfoHeading>
                         <OptionInfoDescription>
                         Нормальным считается положительное значение показателя СОС, т.е. ситуация, когда оборотные активы превышают краткосрочные обязательства. По сути, показатель СОС схож с коэффициентом текущей ликвидности с той лишь разницей, что последний считается как отношение двух составляющих формулу факторов.
                         <br/><br/>
                         Отрицательный показатель собственных оборотных средств крайне негативно характеризует финансовое положение организации. Однако есть примеры отраслей, где фирма может успешно работать даже с отрицательным показателем. Классическим примером выступает отрасль быстрого питания (McDonalds), где данное негативное соотношение перекрывается сверхбыстрым операционным циклом, когда запасы практически сразу превращаются в денежную выручку.
                         <br/><br/>
                         При дальнейшем анализе показатель СОС сравнивают с величиной запасов организации. В нормальных условиях показатель СОС должен быть не просто положительным, но и не меньше величины запасов. Объясняется это тем, что запасы – это, как правило, наименее ликвидная часть оборотных средств, поэтому запасы должны финансироваться за счет собственных (и/или) долгосрочно привлеченных средств.
                         </OptionInfoDescription>
                    </OptionInfo>
               </div>
          </OptionWrapper>
     )
}

export default Option6;