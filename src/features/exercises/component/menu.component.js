import React, { useState } from "react";
import styled from "styled-components";
import Ionicons from "@expo/vector-icons/Ionicons";

//components
import { Text } from "../../../components/typography/text.component";
import {
  MenuContainer,
  SubCategoriesContainer,
  Categories,
  Close,
  Icon,
} from "../component/menu.component.styles";
import { categories } from "./categories";

export const Menu = () => {
  const [picked, setPicked] = useState(false);
  const [chosenCategory, setChosenCategory] = useState({});
  const [chosenSubCategory, setChosenSubCategory] = useState("");

  console.log(chosenCategory);

  console.log(chosenSubCategory);

  return (
    <MenuContainer>
      {!picked ? (
        categories.map((value) => (
          <Categories
            key={value.id}
            onPress={() => {
              setPicked(true);
              setChosenCategory({
                id: value.id,
                category: value.category,
                sub: value.sub,
              });
            }}
          >
            <Text variant="captionBold">{value.category}</Text>
          </Categories>
        ))
      ) : (
        <SubCategoriesContainer
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <Close onPress={() => setPicked(false)}>
            <Icon name="close-circle-outline" size={18} />
          </Close>

          {chosenCategory.sub.map((value, index) => (
            <Categories
              key={index}
              onPress={() => {
                setChosenSubCategory(value);
              }}
            >
              <Text variant="captionBold">{value}</Text>
            </Categories>
          ))}
        </SubCategoriesContainer>
      )}
    </MenuContainer>
  );
};
