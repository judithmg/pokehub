import * as React from 'react';

function SvgPokeball(props) {
  return (
    <svg
      className="svg-pokeball"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384.008 384.008"
      {...props}
    >
      <path d="M383.14 173.184v-.04-.032C373.492 74.424 291.34 0 192.052 0 92.716 0 10.54 74.424.884 173.112v.048c0 .008 0 .016-.008.024a203.47 203.47 0 00-.872 18.824c0 105.864 86.152 192 192.04 192 105.84 0 191.96-86.136 191.96-192 0-6.336-.288-12.672-.864-18.824zM192.052 32.008c79.816 0 146.336 57.696 158.16 135.568-.216.144-.464.304-.696.456a79.42 79.42 0 01-2.496 1.584c-.448.272-.904.544-1.376.832-1.088.64-2.288 1.312-3.56 2-.392.216-.744.416-1.152.632a117.964 117.964 0 01-5.656 2.768c-.424.192-.904.392-1.344.584-1.672.744-3.44 1.496-5.312 2.24-.744.296-1.512.584-2.288.88a145.55 145.55 0 01-5.712 2.024c-.8.264-1.568.536-2.392.8-2.84.904-5.816 1.784-9.008 2.616-.056.016-.112.024-.168.04-3.088.8-6.384 1.536-9.808 2.232-1.072.216-2.2.416-3.304.616a217.577 217.577 0 01-10.224 1.648c-.08-.392-.208-.776-.296-1.168-.248-1.12-.56-2.208-.848-3.304a93.04 93.04 0 00-1.496-5.216c-.368-1.128-.768-2.232-1.168-3.336a98.384 98.384 0 00-1.912-4.848 118.153 118.153 0 00-1.456-3.248 95.872 95.872 0 00-2.352-4.608c-.552-1.016-1.096-2.04-1.688-3.032-.904-1.528-1.872-3.008-2.856-4.488-.6-.904-1.184-1.816-1.816-2.696-1.144-1.584-2.36-3.104-3.6-4.616-.568-.688-1.088-1.416-1.672-2.088a94.51 94.51 0 00-5.832-6.176c-.2-.2-.432-.368-.632-.56a93.221 93.221 0 00-5.752-5.04c-.768-.616-1.576-1.176-2.368-1.768-1.48-1.12-2.968-2.232-4.512-3.264-.944-.632-1.92-1.208-2.888-1.808-1.464-.904-2.936-1.792-4.448-2.616a92.06 92.06 0 00-3.192-1.632 95.767 95.767 0 00-4.592-2.144 96.24 96.24 0 00-3.376-1.384 101.762 101.762 0 00-4.832-1.712c-1.152-.376-2.296-.752-3.464-1.08-1.712-.488-3.456-.896-5.208-1.296-1.128-.256-2.248-.536-3.392-.752-1.952-.368-3.936-.624-5.928-.872-.984-.12-1.96-.296-2.952-.384-3-.28-6.04-.44-9.12-.44s-6.12.168-9.128.44c-.992.088-1.952.264-2.936.384-2 .248-3.992.512-5.952.872-1.136.216-2.248.488-3.376.744a96.3 96.3 0 00-5.24 1.296c-1.16.328-2.288.696-3.432 1.072a93.055 93.055 0 00-4.888 1.728c-1.12.432-2.224.888-3.32 1.36a99.329 99.329 0 00-4.68 2.176c-1.048.52-2.088 1.04-3.112 1.592-1.552.84-3.056 1.744-4.544 2.664-.936.584-1.888 1.144-2.808 1.752-1.592 1.064-3.12 2.2-4.64 3.352-.744.568-1.52 1.096-2.248 1.68a95.625 95.625 0 00-5.992 5.248c-.128.128-.272.232-.408.36a93.751 93.751 0 00-5.872 6.216c-.544.632-1.032 1.304-1.56 1.944-1.272 1.552-2.536 3.12-3.712 4.752-.616.856-1.184 1.752-1.776 2.632-1 1.496-1.984 3-2.904 4.552-.576.976-1.112 1.976-1.656 2.976a98.27 98.27 0 00-2.384 4.664 88.99 88.99 0 00-1.44 3.208 92.269 92.269 0 00-1.928 4.88c-.4 1.104-.8 2.2-1.16 3.32a100.694 100.694 0 00-1.504 5.224c-.288 1.104-.6 2.192-.848 3.312-.088.4-.216.776-.304 1.176-.752-.104-1.504-.208-2.24-.32-2.76-.408-5.432-.856-8.016-1.336-1.096-.208-2.216-.4-3.28-.616-3.464-.704-6.808-1.448-9.928-2.256-.024-.008-.04-.008-.064-.016-3.192-.824-6.152-1.712-8.992-2.608-.848-.272-1.648-.552-2.472-.824a161.466 161.466 0 01-5.64-2c-.784-.296-1.576-.592-2.328-.896a142.491 142.491 0 01-5.312-2.24c-.432-.192-.904-.384-1.32-.576-2.04-.936-3.92-1.864-5.64-2.768-.416-.216-.776-.424-1.168-.64-1.272-.688-2.48-1.36-3.568-2a94.201 94.201 0 01-3.984-2.488c-.176-.12-.376-.248-.544-.36 11.808-77.88 78.36-135.576 158.232-135.576zm63.8 177.784c0 35.184-28.624 63.824-63.808 63.824-35.224 0-63.888-28.632-63.888-63.824l.008-1.048c.04-.368.064-.744.072-1.12 1.072-34.584 29.104-61.672 63.808-61.672 34.656 0 62.648 27.088 63.728 61.672.008.208.048.808.064 1.016.032.384.016.768.016 1.152zm-63.8 142.216c-84.376 0-153.712-65.616-159.632-148.496.656.32 1.4.64 2.08.96.896.416 1.784.832 2.728 1.256 1.176.528 2.424 1.04 3.672 1.568.968.408 1.912.808 2.928 1.208 1.352.536 2.784 1.064 4.216 1.584 1.024.376 2.008.752 3.064 1.12 1.584.552 3.264 1.08 4.936 1.616 1.016.328 1.984.656 3.032.976 2.176.656 4.472 1.28 6.792 1.896.632.168 1.216.352 1.856.512a219.28 219.28 0 009.344 2.16c.976.208 2.032.376 3.032.576 2.312.456 4.624.904 7.048 1.304 1.368.224 2.824.408 4.224.616 1.832.272 3.616.568 5.512.808.192 1.528.512 3.008.776 4.512.2 1.168.36 2.352.6 3.504.44 2.08 1.008 4.104 1.584 6.128.256.896.448 1.816.728 2.704a96.777 96.777 0 003.112 8.488c.112.264.256.504.368.768a94.46 94.46 0 003.528 7.304c.48.896 1.04 1.736 1.544 2.616.984 1.696 1.968 3.392 3.056 5.016.656.992 1.384 1.928 2.08 2.888 1.04 1.44 2.072 2.88 3.192 4.264.792.976 1.632 1.904 2.456 2.848 1.128 1.288 2.256 2.56 3.448 3.784.896.92 1.832 1.8 2.768 2.688a98.503 98.503 0 003.712 3.368c1 .848 2.016 1.672 3.048 2.48a102.787 102.787 0 003.976 2.976 90.55 90.55 0 003.28 2.216c1.4.904 2.824 1.76 4.264 2.592a96.65 96.65 0 003.448 1.912c1.496.784 3.032 1.504 4.576 2.208 1.184.544 2.368 1.088 3.576 1.576 1.608.656 3.248 1.224 4.896 1.792 1.216.416 2.416.856 3.648 1.232 1.752.528 3.536.944 5.328 1.376 1.184.28 2.344.608 3.544.84 2.016.4 4.072.664 6.128.936 1.024.136 2.016.328 3.048.432 3.104.304 6.256.48 9.44.48 3.184 0 6.328-.176 9.432-.48 1.032-.096 2.024-.296 3.048-.432 2.056-.272 4.112-.544 6.128-.936 1.192-.24 2.352-.56 3.536-.84 1.792-.424 3.584-.848 5.328-1.376 1.232-.368 2.424-.808 3.64-1.224 1.648-.568 3.288-1.144 4.896-1.792 1.208-.496 2.384-1.04 3.568-1.576a96.233 96.233 0 004.576-2.208 89.638 89.638 0 003.44-1.904 96.706 96.706 0 004.28-2.6 90.983 90.983 0 007.248-5.192 90.136 90.136 0 003.024-2.464 93.679 93.679 0 003.728-3.392c.928-.88 1.856-1.752 2.744-2.672 1.2-1.232 2.336-2.52 3.464-3.816.816-.936 1.648-1.848 2.432-2.816 1.128-1.392 2.168-2.848 3.224-4.304.68-.952 1.4-1.872 2.048-2.848 1.096-1.648 2.088-3.36 3.088-5.072.496-.856 1.04-1.68 1.512-2.56a98.623 98.623 0 003.576-7.408c.096-.224.224-.44.32-.664 1.168-2.768 2.2-5.6 3.112-8.488.28-.888.472-1.808.728-2.704.568-2.024 1.136-4.04 1.576-6.112.248-1.168.408-2.368.608-3.552.256-1.496.584-2.96.768-4.48 1.656-.208 3.2-.472 4.8-.704 1.584-.232 3.208-.44 4.744-.696 1.992-.328 3.888-.696 5.808-1.064 1.392-.264 2.832-.504 4.184-.792 2.04-.424 3.976-.896 5.928-1.352 1.104-.264 2.272-.504 3.344-.776 2.576-.656 5.04-1.344 7.448-2.048.368-.104.776-.208 1.144-.312a201.456 201.456 0 007.912-2.544c.776-.272 1.48-.552 2.24-.824 1.704-.616 3.408-1.224 5-1.848.896-.352 1.704-.704 2.568-1.056 1.368-.56 2.744-1.12 4.032-1.688.856-.376 1.64-.752 2.464-1.136.952-.44 1.96-.88 2.864-1.32-5.904 82.864-75.2 148.48-159.536 148.48z" />
      <path d="M192.012 158.696c-28.16 0-51.064 22.92-51.064 51.096 0 28.168 22.912 51.08 51.064 51.08 28.16 0 51.072-22.912 51.072-51.08.008-28.176-22.904-51.096-51.072-51.096zm0 70.168c-10.512 0-19.064-8.552-19.064-19.08 0-10.528 8.552-19.096 19.064-19.096 10.52 0 19.072 8.56 19.072 19.096.008 10.528-8.552 19.08-19.072 19.08z" />
    </svg>
  );
}

export default SvgPokeball;