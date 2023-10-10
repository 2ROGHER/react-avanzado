import React, { Component, PureComponent } from 'react';

// Primera forma de implementarlo
// export const  EjemploClass = React.memo(function MiComponente(props) {

// });


// Segunda forma de implementarlo
function MiComponente(props) {
    return(
        <h1>Componente memorizado</h1>
    )
};

//
function propsComparison(prevProps, nextProps) {

}
export const EjemploClass = React.memo(MiComponente, propsComparison);