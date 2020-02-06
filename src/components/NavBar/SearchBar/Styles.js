import styled from "styled-components";

export const SearchFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
export const SearchForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 520px;
  background-color: #f1f3f4;
  border-radius: 5px;
  border-bottom-left-radius: ${props => (props.searched ? "0" : "5px")};
  border-bottom-right-radius: ${props => (props.searched ? "0" : "5px")};
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const SearchLabel = styled.label`
  color: #757575;
  padding: 0 8px;
  margin: 0 5px;
  &:hover {
    cursor: pointer;
    color: rgb(0, 0, 0);
  }
`;

export const SearchInput = styled.input`
  padding: 7px 10px;
  width: 100%;
  font-size: 1rem;
  background: none;
  border: none;
`;

export const SearchResults = styled.div`
  position: absolute;
  top: 34px;
  width: 100%;
  max-height: 80vh;
  overflow-y: scroll;
  border: 1px solid #cecece;
  border-bottom: 1px solid black;
  border-top: none;
`;
