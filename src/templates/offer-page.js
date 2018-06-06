import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Content, { HTMLContent } from '../components/Content';
import atob from 'atob';
import groupBy from 'lodash/groupBy';

import { networks } from '../components/Social';

export const OfferPageTemplate = ({
  url,
  title,
  subtitle,
  alarm_type,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;
  const cost = alarm_type === 'home' ? '49' : '99';

  return (
    <div>
      <Helmet>
        <meta property="og:title" content="Descuento promocional" />
        <meta
          property="og:description"
          content="Descuento sólo hasta el 30 de junio de 2018"
        />
        <meta
          property="og:image"
          content="https://alarmbots.com/images/promotion.jpg"
        />
        <meta name="theme-color" content="#18374f" />>
      </Helmet>
      <section id="home" className="s-home s-offer target-section">
        <div className="overlay" />
        <div className="shadow-overlay" />
        <div className="home-content">
          <div className="row home-content__main">
            <h3>Tú oferta</h3>
            {alarm_type &&
              alarm_type === 'home' && (
                <div>
                  <h1>
                    La Instalación de tu alarma de hogar por{' '}
                    <strike>199 €</strike>
                  </h1>
                </div>
              )}
            {alarm_type &&
              alarm_type === 'business' && (
                <div>
                  <h1>
                    La Instalación de tu alarma de negocio por{' '}
                    <strike>199 €</strike>
                  </h1>
                </div>
              )}
            <h1 className="discount">{cost} €</h1>
            <h3>
              IVA NO INCLUIDO. Descuento válido hasta el 30 de junio de 2018
            </h3>
          </div>
          <div className="home-content__scroll">
            <a href="#services" className="scroll-link smoothscroll">
              <span>Aún hay más</span>
            </a>
          </div>
          <div className="home-content__line" />
        </div>
      </section>
      <section id="offer" className="s-page">
        <div className="row section-header has-bottom-sep">
          <div className="col-full">
            <h3 className="subhead">{subtitle}</h3>
            <h1 className="display-2">{title}</h1>
            <PageContent content={content} />
          </div>
        </div>
        <div className="row section-header has-bottom-sep">
          <a href={url} className="contact smoothscroll btn">
            Solicita una visita
          </a>
        </div>
        <div className="row section-header">
          <div className="col-full">
            <h5>
              Promoción especial INSTALACIÓN POR {cost} EUROS (impuestos
              indirectos no incluidos)
            </h5>
            <h6>Primera. OBJETO DE LA PROMOCIÓN, PARTICIPANTES Y DURACIÓN</h6>
            <p>
              BotSpecialist, S.L. sociedad limitada, y referenciada de aquí en
              adelante BotSpecialist lanza desde el 1 y hasta el último día del
              mes presente una promoción especial relativa a su gama de
              productos a través de la cual:
            </p>
            <p>
              A) Los nuevos usuarios que se den de alta en el servicio de alarma
              , en las fechas indicadas del 1 y hasta el último día del mes
              presente, disfrutarán de una instalación con us coste de {cost}{' '}
              EUROS (i.i. no incluidos).
            </p>
            <p>
              No estarán promocionadas: - La cuota mensual del servicio de
              alarma.
            </p>
            <p>
              - Tampoco estarán promocionados otros gastos u otros costes en los
              que el cliente pudiera incurrir (como traslados por mantenimiento
              del personal técnico o recambios de uno o varios de los elementos
              del equipo de seguridad instalado en el domicilio
              correspondiente).
            </p>
            <h6>Segunda. ÁMBITO DE APLICACIÓN Y MECÁNICA</h6>
            <p>
              La presente promoción que es gratuita y voluntaria, aplica
              exclusivamente a nuevos clientes a partir del 1 del mes presente
              que decidan contratar, en las fechas indicadas, el servicio de
              alarma ofrecido por {title}, los cuales disfrutarán de los
              beneficios ya descritos.
            </p>
            <p>
              Sin embargo no podrán participar en la presente promoción ya
              clientes que tuvieran contratado el servicio de alarma con {title}{' '}
              en la misma dirección de instalación o aquellos clientes que
              hubieran causado baja en {title} en los 3 meses anteriores al
              comienzo de la misma.
            </p>
            <p>
              Esta oferta no será acumulable, en ningún caso, a otras ofertas o
              promociones ofrecidas por {title}
            </p>
            <p>
              * El precio del equipo a instalar está sujeto a un Plan de
              Instalación que se realizará de forma gratuita por personal
              técnico de {title} con carácter previo a la contratación del
              servicio.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

OfferPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  alarm_type: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const OfferPage = ({ location, data }) => {
  const { markdownRemark: post } = data;

  if (!location.search) {
    return <div />;
  }

  const user = JSON.parse(atob(location.search.substring(1)));

  if (!user) {
    return <div />;
  }

  const platform = user.platform || 'whatsapp';
  const url = groupBy(networks, 'class')[platform][0].link(
    'Si, quiero una visita'
  );

  return (
    <OfferPageTemplate
      contentComponent={HTMLContent}
      url={url}
      title={post.frontmatter.title}
      subtitle={post.frontmatter.subtitle}
      alarm_type={user.alarm_type}
      content={post.html}
    />
  );
};

OfferPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default OfferPage;

export const offerPageQuery = graphql`
  query OfferPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subtitle
      }
    }
  }
`;
