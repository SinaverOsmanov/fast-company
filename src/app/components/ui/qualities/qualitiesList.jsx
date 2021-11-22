import React from "react";
import PropTypes from "prop-types";
import Quality from "./quality";
import { useQualities } from "./../../../hooks/useQuality";

const QualitiesList = ({ qualities }) => {
    const { isLoading, getQuality } = useQualities();
    if (!isLoading) {
        return (
            <>
                {qualities.map((qual) => {
                   const quality = getQuality(qual);
                   return (
                    <Quality key={quality._id} {...quality} />
                   );
                })}
            </>
        );
    } else return "loading";
};

QualitiesList.propTypes = {
    qualities: PropTypes.array
};

export default QualitiesList;
