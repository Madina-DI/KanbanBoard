const mockData = [
    {
        title: 'backlog',
        issues: [
            { id: '1', name: 'Login page – performance issues', description: 'First task' },
            { id: '2', name:  'Sprint bugfix', description: 'First task' },
        ],
    },
    {
        title: 'ready',
        issues: [
            { id: '3', name: 'Shop page – performance issues', description: 'Second task' },
            { id: '4', name: 'Checkout bugfix', description: 'Second task' },
            { id: '5', name: 'Shop bug1', description: 'Second task' },
            { id: '6', name: 'Shop bug2', description: 'Second task' },
            { id: '7', name: 'Shop bug3', description: 'Second task' },
            { id: '8', name: 'Shop bug4', description: 'Second task' },
            { id: '9', name: 'Shop bug5', description: 'Second task' },
            { id: '10', name: 'Shop bug6', description: 'Second task' },
            { id: '11', name: 'Shop page – performance issues', description: 'Second task' },  
        ],
    },
    {
        title: 'in progress',
        issues: [
            { id: '12', name: 'User page – performance issues', description: 'Third task' },
            { id: '13', name: 'Auth bugfix', description: 'Third task' },

        ],
    },
    {
        title: 'finished',
        issues: [
            { id: '14', name: 'Main page – performance issues', description: 'Это был темный лес, издали казавшийся непроходимым. Там Пахапиль охотился, глушил рыбу, спал на еловых ветках. Короче – жил, пока русские не выгнали оккупантов. А когда немцы ушли, Пахапиль вернулся. Он появился в Раквере, где советский капитан наградил его медалью. Медаль была украшена четырьмя непонятными словами, фигурой и восклицательным знаком.' },
            { id: '15', name: 'Main page bugfix', description: 'Fourth task' },
        ],
    },
];

export default mockData;
