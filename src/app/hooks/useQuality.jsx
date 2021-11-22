import React, { useState, useEffect, useContext } from "react";
import { PropTypes } from "prop-types";
import { toast } from "react-toastify";
import qualityService from "../services/quality.service";

const QualityContext = React.createContext();

export const useQualities = () => {
    return useContext(QualityContext);
};

export const QualityProvider = ({ children }) => {
    const [isLoading, setLoading] = useState(true);
    const [qualities, setQualities] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        getQualitiesList();
    }, []);

    useEffect(() => {
        if (error !== null) {
            toast(error);
            setError(null);
        }
    }, [error]);

    async function getQualitiesList() {
        try {
            const { content } = await qualityService.get();
            setQualities(content);
            setLoading(false);
        } catch (error) {
            catchError(error);
        };
    }

    function getQuality(id) {
        return qualities.find((p) => p._id === id);
    }

    const catchError = (error) => {
        const { message } = error.response.data;
        setError(message);
      };

    return <QualityContext.Provider value={{ isLoading, getQuality }}>
        { children }
    </QualityContext.Provider>;
};

QualityProvider.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

export default QualityProvider;
