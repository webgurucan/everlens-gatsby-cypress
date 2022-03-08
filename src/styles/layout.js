import styled from 'styled-components';
import { Header, mediaQueries, size, colors } from '@everlywell/leaves';

const Layout = styled.div`
  display: block;
  margin-top: 58px;
  background: ${colors.white};

  ${mediaQueries.forTabletHorizontalUp} {
    margin-top: 3.5rem;
  }
`;

const SiteHeader = styled(Header)`
  z-index: 2;
  position: fixed;
  left: 0px;
  top: 0px;
  right: 0px;

  img {
    width: 7.938rem;
    height: 1.688rem;
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${size.md}px 0;

    ${mediaQueries.forTabletHorizontalUp} {
      justify-content: space-between;
      padding: ${size.md}px calc(100% + 47px - 100vw) ${size.md}px 32px;
    }
  }

  button {
    display: none;
  }

  a[name='support-link'] {
    position: absolute;
    right: ${size.lg}px;

    img {
      height: ${size.lg}px;
      width: ${size.lg}px;
    }

    &:focus {
      color: #008b84;
      border-bottom-color: #008b84;
      outline: none;
    }
  }

  a[aria-label='Support'] {
    display: none;
  }

  a[href='/register'] {
    display: none;
  }

  a[href='/login'] {
    display: none;
  }

  ${mediaQueries.forTabletHorizontalUp} {
    > div {
      order: 2;
      flex-grow: 0;
      padding-top: 1rem;
      padding-bottom: 0.812rem;

      > div {
        margin-left: 0;
      }

      a[name='support-link'] {
        order: 1;
        flex-grow: 1;
        display: flex;
        justify-content: flex-end;

        right: 2.312rem;
      }
    }
  }
`;

export { Layout, SiteHeader };
