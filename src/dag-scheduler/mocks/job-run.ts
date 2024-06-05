export const job_run = {
  input_filename: 'build-analytical-table.ipynb',
  runtime_environment_name: null,
  runtime_environment_parameters: null,
  output_formats: ['ipynb'],
  idempotency_token: null,
  job_definition_id: 'twb9e84r7o40',
  parameters: {},
  tags: null,
  name: 'build-analytical-table',
  output_filename_template: '{{input_filename}}-{{create_time}}',
  compute_type: null,
  job_id: 'vqsrh19klv8r',
  job_files: [],
  url: '/jobs/vqsrh19klv8r',
  create_time: 1711407205000,
  update_time: 1711407205000,
  start_time: 1711407205000,
  end_time: 1711407397000,
  status: 'FAILED',
  status_message:
    'Failed executing notebook file with error: \n---------------------------------------------------------------------------\nException encountered at "In [1]":\n  File "/tmp/ipykernel_43/1960736354.py", line 1\n    1 to 5\n      ^\nSyntaxError: invalid syntax\n\n',
  downloaded: false,
  runtimeProperties: {},
  notificationEvents: null,
  notificationEmails: null,
  externalLinks: [
    {
      label: 'Data Pipeline Run',
      description: 'Data Pipeline Run Url',
      url: 'https://example.com'
    }
  ],
  input_file_id: 'd4bfa40a-9b2c-4aa8-a5d1-e574b01ab996',
  output_file_id: 'd31b98f2-9a05-4fe3-bd4b-f18882d01dab',
  outputPreviewLink: 'https://example.com',
  slackChannel: null,
  scheduleStartDate: null,
  taskTimeout: null,
  showOutputInEmail: false,
  task_runs: [
    {
      input_filename: 'build-analytical-table.ipynb',
      runtime_environment_name: null,
      runtime_environment_parameters: null,
      output_formats: [],
      idempotency_token: null,
      job_definition_id: null,
      parameters: null,
      tags: null,
      name: null,
      output_filename_template: '{{input_filename}}-{{create_time}}',
      compute_type: null,
      job_id: 'vqsrh19klv8r',
      job_files: [
        {
          display_name: 'Input',
          file_format: 'input',
          file_path: null
        }
      ],
      url: '/task_runs/vqsrh19klv8r',
      create_time: 1711407205000,
      update_time: 1711407205000,
      start_time: 1711407205000,
      end_time: 1711407397000,
      status: 'FAILED',
      status_message:
        'Failed executing notebook file with error: \n---------------------------------------------------------------------------\nException encountered at "In [1]":\n  File "/tmp/ipykernel_43/1960736354.py", line 1\n    1 to 5\n      ^\nSyntaxError: invalid syntax\n\n',
      downloaded: false,
      runId: 'vqsrh19klv8r',
      runtimeProperties: null,
      notificationEvents: null,
      notificationEmails: null,
      externalLinks: [
        {
          label: 'Data Pipeline Run',
          description: 'Data Pipeline Run Url',
          url: 'https://example.com'
        }
      ],
      input_file_id: 'd4bfa40a-9b2c-4aa8-a5d1-e574b01ab996',
      output_file_id: 'd31b98f2-9a05-4fe3-bd4b-f18882d01dab',
      outputPreviewLink: 'https://example.com',
      slackChannel: null,
      scheduleStartDate: null,
      taskTimeout: null,
      showOutputInEmail: false,
      run_count: 1,
      taskId: '7rkmf07or9oj',
      dependsOn: []
    }
  ],
  tasks: [
    {
      id: '7rkmf07or9oj',
      nodeId: '7rkmf07or9oj',
      name: 'Spark-Ingest-Data',
      kernelSpecId: 'python3',
      namespaceId: '03n79u8lzwae',
      kernelSpecVersion: null,
      kernelProfileId: null,
      kernelProfileVersion: null,
      runtimeProperties: null,
      inputFiles: [
        {
          contents: null,
          id: 'e6ddde6b-1ff6-4b77-ad3f-6dc729c66466',
          name: 'Spark-Ingest-Data.ipynb',
          notebook_server: null
        }
      ],
      taskTimeout: null,
      showOutputInEmail: false,
      slackChannel: null,
      input_uri: null,
      input_filename: 'Spark-Ingest-Data.ipynb',
      triggerRule: null,
      dependsOn: [],
      parameters: null,
      output_formats: ['html', 'ipynb'],
      create_time: '1714572318000',
      update_time: '1714572318000',
      status: 'CREATED',
      status_message: '',
      input_file_id: 'e6ddde6b-1ff6-4b77-ad3f-6dc729c66466',
      notebookParameters: null,
      notificationEmails: []
    },
    {
      id: 'qoypbi1gdj8r',
      nodeId: 'SMaVbSyaNDEiKD2jDhSIN',
      name: 'fine-tune-LLM',
      kernelSpecId: 'python3',
      namespaceId: '03n79u8lzwae',
      kernelSpecVersion: null,
      kernelProfileId: null,
      kernelProfileVersion: null,
      runtimeProperties: null,
      inputFiles: [
        {
          contents: null,
          id: 'ab803101-862f-42ea-bacb-9b58b81a94ed',
          name: 'fine-tune-LLM.ipynb',
          notebook_server: null
        }
      ],
      taskTimeout: null,
      showOutputInEmail: false,
      slackChannel: null,
      input_uri: null,
      input_filename: 'fine-tune-LLM.ipynb',
      triggerRule: null,
      dependsOn: ['pzyvr3ntc3kk'],
      parameters: null,
      output_formats: ['html', 'ipynb'],
      create_time: '1714572320000',
      update_time: '1714572320000',
      status: 'CREATED',
      status_message: '',
      input_file_id: 'ab803101-862f-42ea-bacb-9b58b81a94ed',
      notebookParameters: null,
      notificationEmails: []
    },
    {
      id: 'pzyvr3ntc3kk',
      nodeId: 'LbbQhZPfKZuSjX7BllnA7',
      name: 'Spark-Feature-Gen',
      kernelSpecId: 'python3',
      namespaceId: '03n79u8lzwae',
      kernelSpecVersion: null,
      kernelProfileId: null,
      kernelProfileVersion: null,
      runtimeProperties: null,
      inputFiles: [
        {
          contents: null,
          id: '9c053784-699c-4062-9f7a-9db8fe1bf6cc',
          name: 'Spark-Feature-Gen.ipynb',
          notebook_server: null
        }
      ],
      taskTimeout: null,
      showOutputInEmail: false,
      slackChannel: null,
      input_uri: null,
      input_filename: 'Spark-Feature-Gen.ipynb',
      triggerRule: null,
      dependsOn: ['7rkmf07or9oj'],
      parameters: null,
      output_formats: ['html', 'ipynb'],
      create_time: '1714572319000',
      update_time: '1714572319000',
      status: 'CREATED',
      status_message: '',
      input_file_id: '9c053784-699c-4062-9f7a-9db8fe1bf6cc',
      notebookParameters: null,
      notificationEmails: []
    },
    {
      id: 'kc11cuzqyiwz',
      nodeId: '8YOw8jd5jG9CZLDbEGbRH',
      name: 'evaluate-LLMs',
      kernelSpecId: 'python3',
      namespaceId: '03n79u8lzwae',
      kernelSpecVersion: null,
      kernelProfileId: null,
      kernelProfileVersion: null,
      runtimeProperties: {},
      inputFiles: [
        {
          contents: null,
          id: '13cc4803-db88-47ec-aa7a-3dd8c0d9991b',
          name: 'evaluate-LLMs.ipynb',
          notebook_server: null
        }
      ],
      taskTimeout: '14400',
      showOutputInEmail: false,
      slackChannel: null,
      input_uri: null,
      input_filename: 'evaluate-LLMs.ipynb',
      triggerRule: 'all_success',
      dependsOn: ['qoypbi1gdj8r', 'g136fpp7bg4a'],
      parameters: {},
      output_formats: ['html', 'ipynb'],
      create_time: '1714572322000',
      update_time: '1714572350000',
      status: 'UPDATED',
      status_message: '',
      input_file_id: '13cc4803-db88-47ec-aa7a-3dd8c0d9991b',
      notebookParameters: {},
      notificationEmails: []
    },
    {
      id: 'g136fpp7bg4a',
      nodeId: '336TjTrNhZ4ZHyJ-5wKBV',
      name: 'fine-tune-LLM1',
      kernelSpecId: 'python3',
      namespaceId: '03n79u8lzwae',
      kernelSpecVersion: null,
      kernelProfileId: null,
      kernelProfileVersion: null,
      runtimeProperties: null,
      inputFiles: [
        {
          contents: null,
          id: '4f9dc2ea-a11b-4e76-9720-1a515622b349',
          name: 'fine-tune-LLM.ipynb',
          notebook_server: null
        }
      ],
      taskTimeout: null,
      showOutputInEmail: false,
      slackChannel: null,
      input_uri: null,
      input_filename: 'fine-tune-LLM.ipynb',
      triggerRule: null,
      dependsOn: ['pzyvr3ntc3kk'],
      parameters: null,
      output_formats: ['html', 'ipynb'],
      create_time: '1714572328000',
      update_time: '1714572328000',
      status: 'CREATED',
      status_message: '',
      input_file_id: '4f9dc2ea-a11b-4e76-9720-1a515622b349',
      notebookParameters: null,
      notificationEmails: []
    }
  ],
  runId: 'scheduled__1976-04-01T00:00:00+00:00'
} as const;