import React, { useState } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { Accordion } from '@everlywell/leaves';

import { sanitize, truncate } from '../../../../utils';

import {
  ProductWrapper,
  ProductImageWrapper,
  ProductInfoWrapper,
  ProductTitle,
  ProductDescription,
  ProductTruncatedDescription,
  ProductDescriptionToggle,
  ProductImage,
  AccordionItemWrapper,
  AccordionHeading,
  MarkerWrapper,
  MarkerTitle,
  MarkerDescription,
  SymptomsList,
} from './styles';

const TOGGLE_LIMIT = 188;

const Product = ({ product }) => {
  const [isToggled, modifyToggleState] = useState(false);

  const productName = product?.displayName;
  const description = product?.longDescription?.longDescription;
  const productImage = product?.productCardImage?.fluid;

  const symptomTitle = product?.symptomList?.title;
  const symptomList = product?.symptomList?.longDescription?.json;

  const markers = product?.markerList?.markers || [];
  const markerTitle = product?.markerList?.title;

  const handleDescriptionToggle = () => modifyToggleState(prev => !prev);

  return (
    <>
      <ProductWrapper key={product?.id}>
        <ProductImageWrapper>
          <ProductImage fluid={productImage} fadeIn={false} />
        </ProductImageWrapper>

        <ProductInfoWrapper>
          <ProductTitle>{productName}</ProductTitle>
          <ProductDescription>
            <ProductTruncatedDescription>
              {isToggled ? description : truncate(description, TOGGLE_LIMIT)}
            </ProductTruncatedDescription>

            {TOGGLE_LIMIT < description?.length && (
              <ProductDescriptionToggle onClick={handleDescriptionToggle}>
                {isToggled ? 'Hide Less' : 'Show More'}
              </ProductDescriptionToggle>
            )}
          </ProductDescription>
        </ProductInfoWrapper>
      </ProductWrapper>

      <Accordion.Wrapper allowMultipleOpened>
        <AccordionItemWrapper hasBorderTop>
          <Accordion.Item>
            <AccordionHeading>{symptomTitle}</AccordionHeading>
            <Accordion.Child>
              <SymptomsList>
                {documentToReactComponents(symptomList)}
              </SymptomsList>
            </Accordion.Child>
          </Accordion.Item>
        </AccordionItemWrapper>

        {markers.length > 0 && (
          <AccordionItemWrapper>
            <Accordion.Item>
              <AccordionHeading>What's Measured</AccordionHeading>
              <Accordion.Child>
                {markers.map(({ description }, index) => (
                  <MarkerWrapper key={index}>
                    <MarkerTitle>{markerTitle}</MarkerTitle>
                    <MarkerDescription
                      dangerouslySetInnerHTML={{
                        __html: sanitize(description?.description),
                      }}
                    />
                  </MarkerWrapper>
                ))}
              </Accordion.Child>
            </Accordion.Item>
          </AccordionItemWrapper>
        )}
      </Accordion.Wrapper>
    </>
  );
};

export default Product;
