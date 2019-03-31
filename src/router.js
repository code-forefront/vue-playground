import codePanel from '@/components/code-panel'
import executionPanel from '@/components/execution-panel'

export default {
    routes: [
        { path: '/', component: codePanel, name: 'codePanel' },
        { path: '/execution', component: executionPanel }
    ],
    mode: 'history'
}
  