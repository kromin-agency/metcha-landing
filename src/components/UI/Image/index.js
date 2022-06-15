import React from "react";
import { graphql, StaticQuery } from "gatsby"; // to query for image data
import PropTypes from "prop-types";
import {GatsbyImage} from "gatsby-plugin-image";

const Image = ({datoCmsImgData = null, ...props}) => (
    <StaticQuery
        query={graphql`
            query {
                images: allFile {
                    edges {
                        node {
                            relativePath
                            name
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                }
            }
        `}
        render={(data) => {
            const image = data.images.edges.find((n) => {
                return n.node.relativePath.includes(props.filename);
            });

            return image ? <GatsbyImage alt={props.alt} image={image.node.childImageSharp.gatsbyImageData} {...props}/> : <></>;
        }}
    />
);

Image.defaultProps = {
    filename: PropTypes.string,
    alt: "",
};

export default Image;
