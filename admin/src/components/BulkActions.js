"use strict";

import React, { useState } from "react";
import { Box, Button, Flex, Typography } from "@strapi/design-system";
import ConfirmationDialog from "./ConfirmationDialog";

const BulkActions = ({selectedRepos, bulkCreateAction, bulkDeleteAction}) => {
    const reposWithoutProject = selectedRepos.filter(repo => !repo.projectId);
    const reposWithProject = selectedRepos.filter(repo => repo.projectId);
    const projectsToBeCreated = reposWithoutProject.length;
    const projectsToBeDeleted = reposWithProject.length;
    const projectIdsToBeDeleted = reposWithProject.map(repo => repo.projectId);
    const [ dialogVisible, setDialogVisible ] = useState(false);
    return (
        <Box paddingBottom={4}>
            <Flex>
                <Typography>
                    {`You have ${projectsToBeCreated} projects to generate and ${projectsToBeDeleted} to delete.`}
                </Typography>
                {projectsToBeCreated > 0 && (
                    <Box paddingLeft={2}>
                        <Button 
                            onClick={() => bulkCreateAction(reposWithoutProject)}
                            size="S" 
                            variant="success-light"
                        >
                            {`Create ${projectsToBeCreated} project(s)`}
                        </Button>
                    </Box>
                )}
                {projectsToBeDeleted > 0 && (
                    <Box paddingLeft={2}>
                        <Button 
                            onClick={() => setDialogVisible(true)}
                            size="S" 
                            variant="danger-light"
                        >
                            {`Delete ${projectsToBeDeleted} project(s)`}
                        </Button>
                    </Box>
                )}
            </Flex>
            <ConfirmationDialog 
                visible={dialogVisible}
                message="Are you sure you want to delete these projects?"
                onClose={() => setDialogVisible(false)}
                onConfirm={() => {
                    bulkDeleteAction(projectIdsToBeDeleted);
                    setDialogVisible(false);
                }}
            />
        </Box>
    )
}

export default BulkActions;