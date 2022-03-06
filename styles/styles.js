import styledComponents from "styled-components/native";
import Constants from "expo-constants";

//colors
export const colors = {
  primary: '#a282af',
  secondary: '#4F2D5D',
  tertiary: '#E6E6E6',
  alternative: '#999999',
};

const statusBarHeight = Constants.statusBarHeight;

/**
 * Container
 */
export const Container = styledComponents.SafeAreaView`
background-color: ${colors.primary};
padding: 20px;
padding-bottom: 0px;
flex: 1;
padding-top: ${statusBarHeight}px;
`;

/**
 * Header view
 */
export const HeaderView = styledComponents.View`
padding-vertical: 10px;
margin-bottom: 10px;
flex-direction: row;
justify-content: space-between;
align-items: center;
`;

/**
 * Header title
 */
export const HeaderTitle = styledComponents.Text`
font-size: 35px;
font-weight: bold;
color: ${colors.tertiary};
letter-spacing: 2px;
font-style: italic;
`;

/**
 * Header button
 */
export const HeaderButton = styledComponents.TouchableOpacity`
font-weight: bold;
color: ${colors.tertiary};
`;

/**
 * List Container
 */
export const ListContainer = styledComponents.View`
margin-bottom: 30px;
flex: 1;
padding-bottom: 40px;
`;

/**
 * List view
 */
export const ListView = styledComponents.TouchableHighlight`
background-color: ${colors.secondary};
min-height: 85px;
width: 100%;
padding: 15px;
justify-content: space-around;
margin-bottom: 15px;
border-radius: 10px;
`;

/**
 * List view hidden
 */
export const ListViewHidden = styledComponents.View`
background-color: ${colors.tertiary};
min-height: 85px;
width: 100%;
padding: 15px;
justify-content: center;
align-items: flex-start;
margin-bottom: 15px;
border-radius: 11px;
`;

/**
 * Hidden button
 */
export const HiddenButton = styledComponents.TouchableOpacity`
width: 55px;
align-items: center;
`;

/**
 * Todo text
 */
export const TodoTextContainerFront = styledComponents.View`
 padding: 20px;
 justify-content: center;
 align-items: center;
 flex: 4;
 background-color: ${colors.primary};
  `;

export const TodoText = styledComponents.Text`
font-size: 16px;
letter-spacing: 1px;
color: ${colors.tertiary};
`;

/**
 * Todo date
 */
export const TodoDate = styledComponents.Text`
 font-size: 10px;
 letter-spacing: 1px;
 color: ${colors.alternative};
 text-align: right;
 text-transform: uppercase;
 `;

/**
 * Text for swiped todo row
 */
export const SwipedTodoText = styledComponents(TodoText)`
color: ${colors.alternative};
font-style: italic;
text-decoration: line-through;
`;

/**
 * Modal
 */
export const ModalButton = styledComponents.TouchableOpacity`
width: 60px;
height: 60px;
background-color: ${colors.tertiary};
border-radius: 50px;
justify-content: center;
align-items: center;
align-self: center;
position: absolute;
bottom: 15px;
 `;

/**
 * Modal Container
 */
export const ModalContainer = styledComponents.View`
padding: 20px;
justify-content: center;
align-items: center;
flex: 1;
background-color: ${colors.primary};
 `;

/**
 * Model view
 */
export const ModalView = styledComponents.View`
background-color: ${colors.secondary};
border-radius: 20px;
padding: 35px;
`;

/**
 * styled input
 */
export const StyledInput = styledComponents.TextInput`
width: 300px;
height: 50px;
background-color: ${colors.tertiary};
padding: 10px;
font-size: 16px;
border-radius: 10px;
color: ${colors.secondary};
letter-spacing: 1px;
`;

/**
 * Modal action
 */
export const ModalAction = styledComponents.TouchableOpacity`
width: 60px;
height: 60px;
background-color: ${(props) => props.color};
border-radius: 50px;
justify-content: center;
align-items: center;
align-self: center;
`;

/**
 * Modal action group
 */
export const ModalActionGroup = styledComponents.View`
flex-direction: row;
justify-content: space-around;
margin-top: 30px;
`;

/**
 * Modal icon
 */
export const ModalIcon = styledComponents.View`
align-items: center;
margin-bottom: 30px;
`;



