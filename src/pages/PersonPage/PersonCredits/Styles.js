import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const DepartmentTitle = styled.h2`
  margin-top: 20px;
`;

export const Credits = styled.div`
  margin: 10px 0;
  width: 100%;
  padding: 10px 20px;
  border: 1px solid #e3e3e3;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;
export const Credit = styled.p`
  margin-top: 5px;
`;

export const CreditLink = styled(NavLink)`
  font-weight: 700;
  &:hover {
    color: #0f37cc;
  }
`;

export const CreditRole = styled.span``;

export const CreditYear = styled.span``;
