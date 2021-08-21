import React from 'react'
import style from "./css/Result.module.css";

function Result({isSubmitted,V1,V2,V3,V4}) {
    return (
        <div className={style.result}>
        <h1>Result:</h1>
        {isSubmitted && (
          <h3>
            Only in List 1:
            {V1.length > 0 ? (
              <span className={style.computation}>{V1.join()}</span>
            ) : (
              <span className={style.computation}>Nothing here!</span>
            )}
          </h3>
        )}
        {isSubmitted && (
          <h3>
            Only in List 2:
            {V2.length > 0 ? (
              <span className={style.computation}>{V2.join()}</span>
            ) : (
              <span className={style.computation}>Nothing here!</span>
            )}
          </h3>
        )}

        {isSubmitted && (
          <h3>
            Items combining both A and B (unique and sorted):
            {V3.length > 0 ? (
              <span className={style.computation}>
                {V3.sort((a, b) => a - b).join()}
              </span>
            ) : (
              <span className={style.computation}>Nothing here!</span>
            )}
          </h3>
        )}
        {isSubmitted && (
          <h3>
            Items present in both A and B:
            {V4.length > 0 ? (
              <span className={style.computation}>{V4.join()}</span>
            ) : (
              <span className={style.computation}>Nothing here!</span>
            )}
          </h3>
        )}
      </div>
    )
}

export default Result
