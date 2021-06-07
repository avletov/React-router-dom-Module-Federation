import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  font-family: 'Nunito';
  font-weight: 400;
  background-color: rgb(240, 240, 240);
`;

export const Header = styled.header`
  display: flex;
  width: 100%;
  height: 50px;
  padding-left: 5%;
  align-items: center;
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: bold;
  box-sizing: border-box;
  color: rgb(60, 63, 59);
  background-color: rgb(150, 150, 150);
`;

export const Form = styled.form`
  display: flex;
  width: 90%;
  height: 50px;
  margin-top: 50px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 0px 10px;
  outline: none;
  border-radius: 5px;
  border: 1px solid rgb(100, 100, 100);
  box-sizing: border-box;
  font-family: 'Nunito';
  font-size: 16px;
`;

export const List = styled.ul`
  width: 90%;
  padding: 0px;
  list-style-type: none;
`;

export const Item = styled.li`
  position: relative;
  display: flex;
  width: 100%;
  min-height: 100px;
  margin: 5px 0px;
  padding-right: 50px;
  align-items: center;
  border-radius: 5px;
  box-sizing: border-box;
  box-shadow: -2px 2px 20px rgb(100, 100, 100, 0.25);
  background-color: rgb(250, 250, 250);
`;

export const Check = styled.input`
  position: relative;
  width: 0px;
  margin: 0px 30px;
  z-index: 2;
`;

interface ILabelProps {
  for: string,
  checked: boolean
}

export const Label = styled.label`
  position: absolute;
  left: 20px;
  width: 20px;
  height: 20px;
  border: 1px solid rgb(200, 200, 200);
  cursor: pointer;
  z-index: 1;

  ${(props: ILabelProps) => props.checked ? `
  border: none;
  width: 22px;
  height: 22px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='green' viewBox='0 0 20 20'%3E%3Cpath d='M0 11l2-2 5 5L18 3l2 2L7 18z'/%3E%3C/svg%3E");
  ` : `
  `};
`;

export const Delete = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3C!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cg%3E%3Cg%3E%3Cpath d='M408.299,98.512l-32.643,371.975H136.344L103.708,98.512l-41.354,3.625l33.232,378.721 C97.335,498.314,112.481,512,130.076,512h251.849c17.588,0,32.74-13.679,34.518-31.391l33.211-378.472L408.299,98.512z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d='M332.108,0H179.892c-19.076,0-34.595,15.519-34.595,34.595v65.73h41.513V41.513h138.378v58.811h41.513v-65.73 C366.703,15.519,351.184,0,332.108,0z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d='M477.405,79.568H34.595c-11.465,0-20.757,9.292-20.757,20.757s9.292,20.757,20.757,20.757h442.811 c11.465,0,20.757-9.292,20.757-20.757S488.87,79.568,477.405,79.568z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E");
  cursor: pointer;
`;

interface ITaskProps {
  checked: boolean
}

export const Task = styled.div`
  text-decoration: ${(props: ITaskProps) => props.checked ? 'line-through' : ''};
`;

export const ConfirmContainer = styled.div`
  position: fixed;
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 0, 0, 0.1);
  z-index: 5;
`;

export const Confirm = styled.div`
  display: flex;
  width: 300px;
  height: 100px;
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  background-color: rgb(250, 250, 250);

  @media screen and (max-width: 500px) {
    width: calc(100vw - 60px);
  }
`;

export const ConfirmText = styled.span`
  display: block;
`;

export const ButtonGroup = styled.div`
  display: flex;
`;

export const ButtonDanger = styled.button`
  margin-right: 20px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: rgb(250, 100, 100);
  color: rgb(255, 255, 255);
  cursor: pointer;
`;

export const ButtonNeutral = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: rgb(250, 230, 220);
  cursor: pointer;
`;