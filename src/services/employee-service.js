import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import  { DeleteCommand, DynamoDBDocumentClient, PutCommand, ScanCommand } from '@aws-sdk/lib-dynamodb'
import { v4 as uuidv4 } from 'uuid';

const TABLE_NAME = import.meta.env.VITE_AWS_EMPLOYEE_TABLE_NAME;

const client = new DynamoDBClient( {
    region: import.meta.env.VITE_AWS_REGION,
    credentials: {
        accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY,
        secretAccessKey: import.meta.env.VITE_SECRET_KEY,
    },
});

const docClient = DynamoDBDocumentClient.from(client);

export async function createEmployee(form) {
    const item = {
        empId: uuidv4(),
        name: form.fullname,
        email: form.email,
        phone: form.phonenumber,
        department: form.department,
        joinDate: form.joinDate,
        status: form.status,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    }

    await docClient.send(new PutCommand({
        TableName: TABLE_NAME,
        Item: item
    }))

    return item;
}

export async function listEmployee() {
    const res = await docClient.send(new ScanCommand({TableName: TABLE_NAME}));
    return res.Items || [];
}

export async function deleteEmployee(empId) {
    await docClient.send(new DeleteCommand({TableName: TABLE_NAME, Key: { empId},
    }))
}